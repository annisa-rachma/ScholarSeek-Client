import InfoTable from "../../../components/InfoTable"
import PageContainer from "../../../components/PageContainer"
import HeaderInfo from "./HeaderInfo"
import { CiBookmark } from "react-icons/ci"

export default function ScholarshipDetailPage() {
    return (
        <PageContainer>
            <div className="flex justify-between items-start">
                <HeaderInfo />
                <div className="mt-5 md:mt-10">
                    <button className="text-4xl md:text-5xl text-primary">
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <InfoTable className="mt-6" />
        </PageContainer>
    )
}
