import { useState } from "react"

import TEST_ChannelForm from "./TEST_ChannelForm"
import TEST_VideoCall from "./TEST_VideoCall"

export default function TEST_MentoringRoom() {
    const [inCall, setInCall] = useState(false)
    const [channelName, setChannelName] = useState("")
    return (
        <div>
            <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
            {inCall ? (
                <TEST_VideoCall
                    setInCall={setInCall}
                    channelName={channelName}
                />
            ) : (
                <TEST_ChannelForm
                    setInCall={setInCall}
                    setChannelName={setChannelName}
                />
            )}
        </div>
    )
}
