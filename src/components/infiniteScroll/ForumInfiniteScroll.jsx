import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import DiscussionCard from "../cards/DiscussionCard"
import DiscussionCardProps from "../../data/discussionCardProp.json"

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
                                    {...DiscussionCardProps}
                                    title={article.title}
                                    desc={article.body}
                                />
                            ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    )
}
