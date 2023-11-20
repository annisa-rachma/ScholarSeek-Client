import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import MentoringCard from "../cards/MentoringCard"
import mentoringCardProp from '../../data/mentoringCardProp.json'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function MentoringInfiniteScroll({
    url_with_limit_and_offset_query,
    limit,
}) {
    const location = useLocation()
    useEffect(() => {
        fetchNextPage();
      }, [location]);

    async function fetchData({ pageParam = 0 }) {
        try {
            const res = await fetch(
                `${url_with_limit_and_offset_query}?limit=${limit}&offset=${pageParam}&${
                    location.search ? `${location.search.slice(1)}` : "?"
                  }`, {
                    headers: {
                        access_token: localStorage.access_token,
                    },
                }
            )
            const data = await res.json()
            console.log(data)
            return { ...data, prevOffSet: pageParam }
        } catch (err) {
            console.log(err)
        }
    }

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [location.search || "data"],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffSet + limit > lastPage.totalMentoring)
                return null
            return lastPage.prevOffSet + limit
        },
    })
    const mentoring = data?.pages.reduce((arr, current) => {
        if(current) {
            return [...arr, ...current?.mentoring]
        } else {return [...arr]}
    }, [])
    // console.log(mentoring)

    return (
        <>
            {mentoring?.length == 0 ? (
                <Loading className="flex-[1]" />
            ) : (
                <InfiniteScroll
                    dataLength={mentoring ? mentoring.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loader={<div className="loading-dots mx-auto my-6"></div>}
                    endMessage={<ReachedTheEnd />}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentoring &&
                            mentoring?.map((mentoring, i) => (
                                <MentoringCard
                                    key={i} 
                                    {...mentoring}
                                   
                                />
                            ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    )
}
