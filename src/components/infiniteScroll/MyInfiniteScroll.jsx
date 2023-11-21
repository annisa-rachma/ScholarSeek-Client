import InfiniteScroll from "react-infinite-scroll-component"
import ReachedTheEnd from "./ReachedTheEnd"
import Loading from "../Loading"

export default function MyInfiniteScroll({
    datas,
    fetchNextPage,
    hasNextPage,
    children,
}) {
    return (
        <>
            {datas?.length == 0 ? (
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
