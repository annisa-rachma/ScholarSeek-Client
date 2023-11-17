import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import scholarships from "../../data/scholarships.json"

export default function TESTInfiniteScroll({ url_with_limit_and_offset_query, limit }) {
    async function fetchData({ pageParam = 0 }) {
        try {
            const res = await fetch(`${url_with_limit_and_offset_query}?limit=${limit}&offset=${pageParam}`)
            const data = await res.json()
            return { ...data, prevOffSet: pageParam }
        } catch (err) {
            console.log(err)
        }
    }
    async function fetchData({pageParam = 0}) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return scholarships.slice(())
        } catch (err) {
            
        }
    }


    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffSet + limit > lastPage.articlesCount) return null
            return lastPage.prevOffSet + limit
        },
    })
    const articles = data?.pages.reduce((arr, current) => {
        return [...arr, ...current.articles]
    }, [])

    return (
        <div>
            <div>InfiniteScroll</div>
            <InfiniteScroll
                dataLength={articles ? articles.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<div>Loading...</div>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Udah abis brooooo</b>
                    </p>
                }
            >
                <div className="flex flex-col gap-3">
                    {articles &&
                        articles.map((article, i) => (
                            <div key={i} className="border py-4 px-5">
                                {article.title}
                            </div>
                        ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
