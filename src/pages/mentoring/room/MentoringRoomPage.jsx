import PageContainer from "../../../components/PageContainer"
import ParticipantsSideBar from "./containers/ParticipantsSideBar"
import StreamActions from "./containers/StreamActions"
import participantsMock from "../../../data/participantsMock.json"
import chatsMock from "../../../data/chatsMock.json"
import ChatsSideBar from "./containers/ChatsSideBar"

export default function MentoringRoomPage() {
    const WINDOW_HEIGHT = 80

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
                <div className="flex-[1] relative z-[1]">

                    <StreamActions />
                </div>
                <ChatsSideBar chats={chatsMock} pageHeight={WINDOW_HEIGHT} />
            </PageContainer>
        </div>
    )
}
