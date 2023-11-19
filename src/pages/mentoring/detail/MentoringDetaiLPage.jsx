import PageContainer from "../../../components/PageContainer"
import BodyInfo from "./BodyInfo"
import HeaderInfo from "./HeaderInfo"
import { CiBookmark } from "react-icons/ci"

export default function MentoringDetailPage() {
    return (
        <PageContainer>
            <div className="flex justify-between items-center">
                <HeaderInfo date={"1 Nov 2023"} time={"14.00 WIB"} />
                <div className="">
                    <button className="text-4xl md:text-5xl text-primary">
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <BodyInfo
            className='mt-4'
                image={
                    "https://embed-ssl.wistia.com/deliveries/3abd4a7e9cb147f201b51fcc4a364c90.webp?image_crop_resized=1280x720"
                }
                desc={
                    "Excepteur incididunt eiusmod et reprehenderit velit dolore. Et enim enim excepteur velit quis cupidatat deserunt fugiat anim fugiat incididunt consequat. Lorem Lorem sunt labore ex duis quis. Eu commodo in labore nisi officia sit et.Nulla proident nostrud laborum sint cillum qui magna sunt. Irure proident adipisicing ut nulla dolore. Proident et amet reprehenderit elit est ea laboris sit ut voluptate amet occaecat. Sint dolore enim id esse culpa labore nisi magna pariatur adipisicing voluptate exercitation in."
                }
                user={{
                    profilePicture:
                        "https://cdn.discordapp.com/avatars/425207717985124362/04ea769340dabe1f1b30cf6b51289245?size=1024",
                    username: "Willy Hardian",
                    status: "Hacktiv Awardee 1945",
                }}
                topics={['IISMA', 'S1', 'Excahnge']}
            />
        </PageContainer>
    )
}
