import { useEffect, useState } from "react"
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"
import Controls from "./Controls"
import Videos from "./Videos"

const config = {
    mode: "rtc",
    codec: "vp8",
}
const useClient = createClient(config)
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()

export default function VideoCall({ setInCall, channelName }) {
    const [users, setUsers] = useState([])
    const [start, setStart] = useState(false)
    const client = useClient()
    const { ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {
        // function to initialise the SDK
        let init = async (name) => {
            console.log("init", name)
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType)
                console.log("subscribe success", user)
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return [...prevUsers, user]
                    })
                }
                if (mediaType === "audio") {
                    user.audioTrack?.play()
                }
            })

            client.on("user-unpublished", (user, type) => {
                console.log("unpublished", user, type)
                if (type === "audio") {
                    user.audioTrack?.stop()
                }
                if (type === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid)
                    })
                }
            })

            client.on("user-left", (user) => {
                console.log("leaving", user)
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid)
                })
            })

            await client.join(
                import.meta.env.VITE_AGORA_PROJECT_APP_ID,
                name,
                null,
                null
            )
            if (tracks) await client.publish([tracks[0], tracks[1]])
            setStart(true)
        }

        if (ready && tracks) {
            console.log("init ready")
            init(channelName)
        }
    }, [channelName, client, ready, tracks])

    return (
        <>
            <div className="flex-[1] flex relative z-[1]">
                {ready && tracks && (
                    <Controls
                        tracks={tracks}
                        setStart={setStart}
                        setInCall={setInCall}
                    />
                )}
                {start && tracks && <Videos users={users} tracks={tracks} />}
            </div>
        </>
    )
}
