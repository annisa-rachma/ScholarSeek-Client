import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import ForumInfiniteScroll from "../../../components/infiniteScroll/ForumInfiniteScroll"
import getFormEntries from "../../../lib/getFormEntries"

export default function ForumPage() {
    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        console.log(formEntriesObj)
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Forum</PageTitle>
            <SearchBar
                includeButton
                name="q"
                onSubmit={handleSubmit}
                placeholder="Cari topik atau nama mentor"
            />
            <ForumInfiniteScroll
                url_with_limit_and_offset_query="https://api.realworld.io/api/articles"
                limit={10}
            />
        </PageContainer>
    )
}
