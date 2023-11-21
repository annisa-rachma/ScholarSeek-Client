import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import MentoringCard from "../../../components/cards/MentoringCard"
import SearchBar from "../../../components/form/SearchBar"
import MyInfiniteScroll from "../../../components/infiniteScroll/MyInfiniteScroll"
import useMyInfiniteQuery from "../../../hooks/useMyInfiniteQuery"
import getFormEntries from "../../../lib/getFormEntries"
import { useNavigate } from "react-router-dom"

export default function MentoringPage() {
    const navigate = useNavigate()
    const query = useMyInfiniteQuery({
        url: `${import.meta.env.VITE_BASE_URL}/mentoring`,
        limit: 10,
    })

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        navigate(`/mentoring?title=${formEntriesObj.search}`)
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Mentoring</PageTitle>
            <SearchBar
                includeButton
                name="search"
                onSubmit={handleSubmit}
                placeholder="Cari topik atau nama mentor"
            />
            <MyInfiniteScroll {...query}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {query.datas &&
                        query.datas?.map((data, i) => (
                            <MentoringCard key={i} {...data} />
                        ))}
                </div>
            </MyInfiniteScroll>
        </PageContainer>
    )
}
