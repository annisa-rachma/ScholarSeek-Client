import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import DiscussionCard from "../../../components/cards/DiscussionCard"
import SearchBar from "../../../components/form/SearchBar"
import MyInfiniteScroll from "../../../components/infiniteScroll/MyInfiniteScroll"
import useMyInfiniteQuery from "../../../hooks/useMyInfiniteQuery"
import getFormEntries from "../../../lib/getFormEntries"
import { useNavigate } from "react-router-dom"

export default function ForumPage() {
    const infiniteQuery = useMyInfiniteQuery({
        url: `${import.meta.env.VITE_BASE_URL}/threads`,
        limit: 10,
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        console.log(formEntriesObj)
        navigate(`/forum?title=${formEntriesObj.search}`)
    }

    console.log(infiniteQuery.datas)
    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Forum</PageTitle>
            <SearchBar
                includeButton
                name="search"
                onSubmit={handleSubmit}
                placeholder="Cari topik..."
            />

            <MyInfiniteScroll {...infiniteQuery}>
                <div className="flex flex-col gap-6">
                    {infiniteQuery.datas &&
                        infiniteQuery.datas.map((data, i) => (
                            <DiscussionCard key={i} {...data} />
                        ))}
                </div>
            </MyInfiniteScroll>
        </PageContainer>
    )
}
