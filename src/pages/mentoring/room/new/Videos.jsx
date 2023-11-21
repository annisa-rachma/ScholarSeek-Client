import { AgoraVideoPlayer } from "agora-rtc-react"

export default function Videos({ users, tracks }) {
    return (
        <div id="videos" className=" flex-[1] flex flex-col">
            <AgoraVideoPlayer
                className="flex-[1] min-h-[400px]"
                videoTrack={tracks[1]}
            />
            {users.length > 0 && (
                <div className=" mt-5 flex gap-10">
                    {users.map((user) => {
                        if (user.videoTrack) {
                            return (
                                <div key={user.uid} className="rounded-full overflow-hidden">
                                    <AgoraVideoPlayer
                                        className="h-[200px] w-[200px]"
                                        videoTrack={user.videoTrack}
                                        key={user.uid}
                                    />
                                </div>
                            )
                        } else return null
                    })}
                </div>
            )}
        </div>
    )
}
