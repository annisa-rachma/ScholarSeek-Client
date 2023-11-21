import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import FilterButton_Modal from "./FilterButton_Modal"
import FilterMenu from "./FilterMenu"
import getFormEntries from "../../../lib/getFormEntries"
import { useNavigate } from "react-router-dom"
import useMyInfiniteQuery from "../../../hooks/useMyInfiniteQuery"
import MyInfiniteScroll from "../../../components/infiniteScroll/MyInfiniteScroll"
import ScholarshipCard from "../../../components/cards/ScholarshipCard"

export default function ScholarshipsPage() {
    const navigate = useNavigate()

    const infiniteQuery = useMyInfiniteQuery({
        url: `${import.meta.env.VITE_BASE_URL}/scholarships`,
        limit: 10,
    })

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        navigate(`/scholarships?name=${formEntriesObj.search}`)
    }

    function handleFilterSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        const queryString = Object.keys(formEntriesObj)
            .map((key) => `${key}=${formEntriesObj[key]}`)
            .join("&")

        navigate(`/scholarships?${queryString}`)
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Scholarships</PageTitle>
            <div className="flex-[1] grid grid-cols-1 md:grid-cols-4 gap-8">
                <FilterMenu
                    className="max-md:hidden"
                    onSubmit={handleFilterSubmit}
                />
                <article className="md:col-span-3 col-span-1 flex flex-col gap-6">
                    <div className="flex gap-4">
                        <FilterButton_Modal />
                        <SearchBar
                            onSubmit={handleSubmit}
                            name="search"
                            placeholder="Cari beasiswa"
                            includeButton
                            className="flex-[1]"
                        />
                    </div>
                    <MyInfiniteScroll {...infiniteQuery}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {infiniteQuery.datas &&
                                infiniteQuery.datas?.map((data, i) => (
                                    <ScholarshipCard key={i} {...data} />
                                ))}
                        </div>
                    </MyInfiniteScroll>
                </article>
            </div>
        </PageContainer>
    )
}
