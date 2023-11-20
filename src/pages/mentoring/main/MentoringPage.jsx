import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import MentoringInfiniteScroll from "../../../components/infiniteScroll/MentoringInfiniteScroll"
import getFormEntries from "../../../lib/getFormEntries"
import { BASE_URL } from "../../../routes/base_url"

export default function MentoringPage() {
    let url = `${BASE_URL}/mentoring`
    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        console.log(formEntriesObj)
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Mentoring</PageTitle>
            <SearchBar
                includeButton
                name="q"
                onSubmit={handleSubmit}
                placeholder="Cari topik atau nama mentor"
            />
            <MentoringInfiniteScroll
                url_with_limit_and_offset_query="https://api.realworld.io/api/articles"
                limit={10}
            />
        </PageContainer>
    )
}
