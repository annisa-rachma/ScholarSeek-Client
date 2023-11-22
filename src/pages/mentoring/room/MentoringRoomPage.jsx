import PageContainer from "../../../components/PageContainer"
import ParticipantsSideBar from "./containers/ParticipantsSideBar"
import participantsMock from "../../../data/participantsMock.json"
import chatsMock from "../../../data/chatsMock.json"
import ChatsSideBar from "./containers/ChatsSideBar"
import { useParams } from "react-router"
import { useState } from "react"
import { useEffect } from "react"
import VideoCall from "./new/VideoCall"

export default function MentoringRoomPage() {
    const WINDOW_HEIGHT = 80
    const { slug } = useParams()

    const [inCall, setInCall] = useState(false)
    const [channelName, setChannelName] = useState("")

    useEffect(() => {
        setInCall(true)
        setChannelName(slug)
    }, [slug])

    return (
        <div style={{ minHeight: `${WINDOW_HEIGHT}vh` }}>
            <PageContainer
                noPadding
                className="min-h-[80vh] relative flex bg-gray-200"
            >
                <ParticipantsSideBar
                    participantsCount={27}
                    participants={participantsMock}
                    pageHeight={WINDOW_HEIGHT}
                />
                {inCall && (
                    <VideoCall
                        setInCall={setInCall}
                        channelName={channelName}
                    />
                )}
                <ChatsSideBar chats={chatsMock} pageHeight={WINDOW_HEIGHT} />
            </PageContainer>
        </div>
    )
}
