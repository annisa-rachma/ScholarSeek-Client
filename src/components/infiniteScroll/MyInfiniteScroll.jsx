import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"
import { PiSmileySadLight } from "react-icons/pi";

export default function MyInfiniteScroll({
    datas,
    fetchNextPage,
    hasNextPage,
    children,
    isLoading
}) {
    if (datas?.length < 1) return (
        <div className="text-slate-300 flex flex-col items-center justify-center mb-20 flex-[1]">
            <PiSmileySadLight className="text-[200px]"/>
            <p className="text-3xl">Data Not Found!</p>
        </div>
    )
    return (
        <>
            {isLoading ? (
                <Loading className="flex-[1]" />
            ) : (
                <InfiniteScroll
                    dataLength={datas ? datas.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loader={<div className="loading-dots mx-auto my-6"></div>}
                    endMessage={<ReachedTheEnd />}
                >
                    {children}
                </InfiniteScroll>
            )}
        </>
    )
}
