import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import DiscussionCard from "../DiscussionCard"

export default function ForumInfiniteScroll({
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
                    <div className="flex flex-col gap-6">
                        {articles &&
                            articles.map((article, i) => (
                                <DiscussionCard
                                    key={i}
                                    slug={"ini-pura-puranya-slug-mentoring"}
                                    likes={4}
                                    dislikes={1}
                                    commentCount={12}
                                    title={article.title}
                                    desc={
                                        "Deserunt laborum incididunt laborum pariatur minim nostrud aute ea sit labore consectetur. Nulla minim labore esse est laboris culpa reprehenderit commodo. Ut incididunt veniam ipsum reprehenderit aute anim occaecat minim sint. Nulla minim officia consequat sunt aliquip eu id. Sit pariatur nostrud ea esse ea veniam excepteur esse anim enim sit nostrud. Sit nisi deserun."
                                    }
                                    createdAt={"sejam yang lalu"}
                                    user={{
                                        username: "Awal Ganteng",
                                        profilePicture:
                                            "https://avatars.githubusercontent.com/u/102479369?v=4",
                                    }}
                                />
                            ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    )
}
