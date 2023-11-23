import { FiCamera } from "react-icons/fi"
import { FiCameraOff } from "react-icons/fi"

import { IoMicOutline } from "react-icons/io5"
import { IoMicOffOutline } from "react-icons/io5"

import { RiLogoutBoxRLine } from "react-icons/ri"

import { createClient } from "agora-rtc-react"
import { useState } from "react"
import StreamActionButton from "../buttons/StreamActionButton"
import { useNavigate } from "react-router"
const config = {
    mode: "rtc",
    codec: "vp8",
}
const useClient = createClient(config)

export default function Controls({ tracks, setStart, setInCall }) {
    const navigate = useNavigate()
    const client = useClient()
    const [trackState, setTrackState] = useState({ video: true, audio: true })
    // the type is : "audio" | "video"
    const mute = async (type) => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio)
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio }
            })
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video)
            setTrackState((ps) => {
                return { ...ps, video: !ps.video }
            })
        }
    }

    const leaveChannel = async () => {
        await client.leave()
        client.removeAllListeners()
        tracks[0].close()
        tracks[1].close()
        setStart(false)
        setInCall(false)
    }

    const actions = [
        {
            activeIcon: <FiCamera />,
            inactiveIcon: <FiCameraOff />,
            name: "video",
            onClick: () => mute("video"),
        },
        {
            activeIcon: <IoMicOutline />,
            inactiveIcon: <IoMicOffOutline />,
            name: "audio",
            onClick: () => mute("audio"),
        },
        {
            inactiveIcon: <RiLogoutBoxRLine />,
            name: "leave",
            onClick: async () => {
                await leaveChannel()
                navigate('/')
            },
        },
    ]

    return (
        <div className="absolute bottom-5 left-[50%] z-[2] translate-x-[-50%] flex gap-2">
            {actions.map((action) => (
                <StreamActionButton
                    key={action.name}
                    activeIcon={action.activeIcon}
                    inactiveIcon={action.inactiveIcon}
                    isActive={trackState[action.name]}
                    onClick={action.onClick}
                />
            ))}
        </div>
    )
}
