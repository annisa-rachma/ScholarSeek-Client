import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import MentoringCard from "../MentoringCard"

export default function MentoringInfiniteScroll({
    url_with_limit_and_offset_query,
    limit,
}) {
    async function fetchData({ pageParam = 0 }) {
        try {
            const res = await fetch(
                `${url_with_limit_and_offset_query}?limit=${limit}&offset=${pageParam}`
            )
            const data = await res.json()
            return { ...data, prevOffSet: pageParam }
        } catch (err) {
            console.log(err)
        }
    }

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffSet + limit > lastPage.articlesCount)
                return null
            return lastPage.prevOffSet + limit
        },
    })
    const articles = data?.pages.reduce((arr, current) => {
        return [...arr, ...current.articles]
    }, [])

    return (
        <>
            {!articles ? (
                <Loading className="flex-[1]" />
            ) : (
                <InfiniteScroll
                    dataLength={articles ? articles.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loader={<div className="loading-dots mx-auto my-6"></div>}
                    endMessage={<ReachedTheEnd />}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles &&
                            articles.map((article, i) => (
                                <MentoringCard
                                    key={i}
                                    slug={"ini-pura-puranya-slug-mentoring"}
                                    image={
                                        "https://embed-ssl.wistia.com/deliveries/3abd4a7e9cb147f201b51fcc4a364c90.webp?image_crop_resized=1280x720"
                                    }
                                    date={"1 Nov 2023"}
                                    time={"14.00 WIB"}
                                    title={article.title}
                                    user={{
                                        profilePicture:
                                            "https://cdn.discordapp.com/avatars/425207717985124362/04ea769340dabe1f1b30cf6b51289245?size=1024",
                                        username: "Willy Hardian",
                                        status: "Hacktiv Awardee 1945",
                                    }}
                                />
                            ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    )
}
