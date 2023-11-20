import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import ScholarshipCard from "../cards/ScholarshipCard";
import ReachedTheEnd from "./ReachedTheEnd";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollarShipInfiniteScroll({
  url_with_limit_and_offset_query,
  limit,
}) {
  const location = useLocation();
  useEffect(() => {
    fetchNextPage();
  }, [location]);

  async function fetchData({ pageParam = 0 }) {
    try {
      const res = await fetch(
        `${url_with_limit_and_offset_query}?limit=${limit}&offset=${pageParam}&${
          location.search ? `${location.search.slice(1)}` : "?"
        }`
      );
      const data = await res.json();
      // console.log(data)
      return { ...data, prevOffSet: pageParam };
    } catch (err) {
      console.log(err);
    }
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [location.search || "data"],
    queryFn: fetchData,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffSet + limit > lastPage.totalScholarships) return null;
      return lastPage.prevOffSet + limit;
    },
  });
  const scholarships = data?.pages.reduce((arr, current) => {
    return [...arr, ...current.scholarships];
  }, []);

  return (
    <>
      {!scholarships ? (
        <Loading className="flex-[1]" />
      ) : (
        <InfiniteScroll
          dataLength={scholarships ? scholarships.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<div className="loading-dots mx-auto my-6"></div>}
          endMessage={<ReachedTheEnd />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scholarships &&
              scholarships.map((scholarship, i) => (
                <ScholarshipCard
                  key={i}
                  {...scholarship}
                  // title={scholarship.title}
                />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}
