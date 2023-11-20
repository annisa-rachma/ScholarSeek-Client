import { AgoraVideoPlayer } from "agora-rtc-react"

export default function TEST_Videos({ users, tracks }) {
    return (
        <div>
            <div id="videos">
                <AgoraVideoPlayer
                    className="vid"
                    videoTrack={tracks[1]}
                    style={{ height: "500px", width: "500px" }}
                />
                {users.length > 0 &&
                    users.map((user) => {
                        if (user.videoTrack) {
                            return (
                                <AgoraVideoPlayer
                                    className="vid"
                                    videoTrack={user.videoTrack}
                                    style={{ height: "500px", width: "500px" }}
                                    key={user.uid}
                                />
                            )
                        } else return null
                    })}
            </div>
        </div>
    )
}