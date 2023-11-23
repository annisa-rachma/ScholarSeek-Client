import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import DiscussionCard from "../../../components/cards/DiscussionCard"
import SearchBar from "../../../components/form/SearchBar"
import MyInfiniteScroll from "../../../components/infiniteScroll/MyInfiniteScroll"
import useMyInfiniteQuery from "../../../hooks/useMyInfiniteQuery"
import getFormEntries from "../../../lib/getFormEntries"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../../../components/Button"
import AddThreadPopup from "../../../components/AddThreadPopup"
// import AddMentoringPopup from "../../../components/AddMentoringPopup"

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
    const [showAddThread, setShowAddThread] = useState(false)
    const handleOnClose = () => setShowAddThread(false)
    // console.log(infiniteQuery.datas)
    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Forum</PageTitle>
            <SearchBar
                includeButton
                name="search"
                onSubmit={handleSubmit}
                placeholder="Cari topik..."
            />
            <div className="flex justify-end">
              <Button  onClick={() => {setShowAddThread(true)}}className={"bg-primary text-white hover:bg-[#2e4cc5]"} >Add new thread</Button>
            </div>
            <MyInfiniteScroll {...infiniteQuery}>
                <div className="flex flex-col gap-6">
                    {infiniteQuery.datas &&
                        infiniteQuery.datas.map((data, i) => (
                            <DiscussionCard key={i} {...data} refetch={infiniteQuery.refetchData} />
                        ))}
                </div>
            </MyInfiniteScroll>
            <AddThreadPopup onClose={handleOnClose} visible={showAddThread} refetch={infiniteQuery.refetchData}/>

        </PageContainer>
    )
}
