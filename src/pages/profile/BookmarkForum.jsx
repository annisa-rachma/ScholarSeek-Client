import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import PageContainer from "../../components/PageContainer"
import Loading from "../../components/Loading"
import DiscussionCard from "../../components/cards/DiscussionCard"
import NoDataSad from "../../components/NoDataSad"

export default function BookmarkForum() {
    const { slug } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: [slug],
        queryFn: async () => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + "/bookmarks/thread",
                    {
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    }
                )
                const bookmarkedScholarships = await res.json()
                return bookmarkedScholarships
            } catch (err) {
                console.log(err)
            }
        },
    })
    console.log(data)
    return (
        <>
            <PageContainer className={`mb-12`}>
                {isLoading ? (
                    <Loading />
                ) : data.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {data.map((el, i) => (
                            <DiscussionCard key={i} {...el} />
                        ))}
                    </div>
                ) : (
                    <NoDataSad/>
                )}
            </PageContainer>
        </>
    )
}
