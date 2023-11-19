import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import ScholarshipCard from "../cards/ScholarshipCard"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import ScholarshipProp from "../../data/scholarshipCardProp.json"

export default function ScrollarShipInfiniteScroll({
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {articles &&
                            articles.map((article, i) => (
                                <ScholarshipCard
                                    key={i}
                                    {...ScholarshipProp}
                                    title={article.title}
                                />
                            ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    )
}
