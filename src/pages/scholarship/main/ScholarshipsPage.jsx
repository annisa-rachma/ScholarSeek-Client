import InfiniteScroll from "../../../components/infiniteScroll/ScholarshipInfiniteScroll"
import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import FilterButton_Modal from "./FilterButton_Modal"
import FilterMenu from "./FilterMenu"
import getFormEntries from "../../../lib/getFormEntries"

export default function ScholarshipsPage() {
    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        console.log(formEntriesObj)
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Scholarships</PageTitle>
            <div className="flex-[1] grid grid-cols-1 md:grid-cols-4 gap-8">
                <FilterMenu className="max-md:hidden" />
                <article className="md:col-span-3 col-span-1 flex flex-col gap-6">
                    <div className="flex gap-4">
                        <FilterButton_Modal />
                        <SearchBar
                            onSubmit={handleSubmit}
                            name="q"
                            placeholder="Cari beasiswa"
                            includeButton
                            className="flex-[1]"
                        />
                    </div>
                    <InfiniteScroll
                        url_with_limit_and_offset_query="https://api.realworld.io/api/articles"
                        limit={10}
                    />
                </article>
            </div>
        </PageContainer>
    )
}
