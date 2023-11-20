import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import ForumInfiniteScroll from "../../../components/infiniteScroll/ForumInfiniteScroll"
import getFormEntries from "../../../lib/getFormEntries"
import { BASE_URL } from "../../../routes/base_url"
import { useNavigate } from "react-router-dom"

export default function ForumPage() {
    let url = `${BASE_URL}/threads`
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        console.log(formEntriesObj)
        navigate(
            `/scholarships?title=${formEntriesObj.search}`
        );
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Forum</PageTitle>
            <SearchBar
                includeButton
                name="search"
                onSubmit={handleSubmit}
                placeholder="Cari topik..."
            />
            <ForumInfiniteScroll
                url_with_limit_and_offset_query={url}
                limit={10}
            />
        </PageContainer>
    )
}
