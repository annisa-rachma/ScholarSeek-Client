import { useInfiniteQuery } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"

export default function useMyInfiniteQuery({ url, limit }) {
    const { search } = useLocation()
    async function fetchData({ pageParam = 0 }) {
        try {
            const res = await fetch(
                `${url}?limit=${limit}&offset=${pageParam}&${
                    search ? `${search.slice(1)}` : "?"
                }`,
                {
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                }
            )
            const data = await res.json()
            return { ...data, prevOffSet: pageParam }
        } catch (err) {
            console.log(err)
        }
    }

    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ["scholarships", {search}],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffSet + limit > lastPage.totalData) return null
            return lastPage.prevOffSet + limit
        },
    })
    const datas = data?.pages.reduce((arr, current) => {
        if (current) {
            return [...arr, ...current.datas]
        } else {
            return [...arr]
        }
    }, [])

    return { datas, fetchNextPage, hasNextPage, isLoading}
}
