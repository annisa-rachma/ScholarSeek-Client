import InfiniteScroll from "../components/infiniteScroll/ScholarshipInfiniteScroll"
import PageContainer from "../components/PageContainer"
import PageTitle from "../components/PageTitle"
import SearchBar from "../components/SearchBar"

export default function Scholarships() {
    return (
        <div>
            <PageContainer className="flex flex-col gap-6">
                <PageTitle>Scholarships</PageTitle>
                <article></article>
                <article className="flex flex-col gap-6">
                    <SearchBar placeholder="Cari beasiswa" />
                    <InfiniteScroll
                        url_with_limit_and_offset_query="https://api.realworld.io/api/articles"
                        limit={10}
                    />
                </article>
            </PageContainer>
        </div>
    )
}
