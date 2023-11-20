import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import MentoringInfiniteScroll from "../../../components/infiniteScroll/MentoringInfiniteScroll"
import getFormEntries from "../../../lib/getFormEntries"
import { BASE_URL } from "../../../routes/base_url"
import { useNavigate } from "react-router-dom"

export default function MentoringPage() {
    let url = `${BASE_URL}/mentoring`
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        navigate(
            `/mentoring?title=${formEntriesObj.search}`
            );
        // console.log(formEntriesObj)
    }
    

    // console.log(url)
    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Mentoring</PageTitle>
            <SearchBar
                includeButton
                name="search"
                onSubmit={handleSubmit}
                placeholder="Cari topik atau nama mentor"
            />
            <MentoringInfiniteScroll
                url_with_limit_and_offset_query={url}
                limit={10}
            />
        </PageContainer>
    )
}
