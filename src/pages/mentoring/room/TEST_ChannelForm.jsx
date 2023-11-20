import Button from "../../../components/Button"
import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import TextInput from "../../../components/form/TextInput"
import getFormEntries from "../../../lib/getFormEntries"

export default function TEST_ChannelForm({ setInCall, setChannelName }) {
    function handleSubmit(e) {
        e.preventDefault()
        const {roomId} = getFormEntries(e)
        setChannelName(roomId)
        setInCall(true)
    }

    return (
        <PageContainer className='flex flex-col gap-5 justify-center' >
            <PageTitle>JOIN BROK</PageTitle>

            <form className="flex gap-4 " onSubmit={handleSubmit}>
                {import.meta.env.VITE_AGORA_PROJECT_APP_ID === "" && (
                    <p style={{ color: "red" }}>
                        Please enter your Agora App ID in App.tsx and refresh the
                        page
                    </p>
                )}
                <TextInput
                    placeholder="Enter Room ID"
                    id="roomId"
                    className="flex-[1] shadow-md"
                />
                <Button className="bg-primary text-white" type="submit">
                    Join
                </Button>
            </form>

        </PageContainer>
    )
}
