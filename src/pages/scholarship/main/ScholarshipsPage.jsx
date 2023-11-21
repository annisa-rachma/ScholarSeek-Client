import InfiniteScroll from "../../../components/infiniteScroll/ScholarshipInfiniteScroll"
import PageContainer from "../../../components/PageContainer"
import PageTitle from "../../../components/PageTitle"
import SearchBar from "../../../components/form/SearchBar"
import FilterButton_Modal from "./FilterButton_Modal"
import FilterMenu from "./FilterMenu"
import getFormEntries from "../../../lib/getFormEntries"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../../routes/base_url"

export default function ScholarshipsPage() {
    let url = `${BASE_URL}/scholarships`
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        navigate(
            `/scholarships?name=${formEntriesObj.search}`
            );
    }

    function handleFilterSubmit(e) {
        e.preventDefault()
        const formEntriesObj = getFormEntries(e)
        const queryString = Object.keys(formEntriesObj)
            .map((key) => `${key}=${formEntriesObj[key]}`)
            .join('&');

        // console.log(`/scholarships?${queryString}`)
        navigate(
            `/scholarships?${queryString}`
        );
    }

    return (
        <PageContainer className="flex flex-col gap-6">
            <PageTitle>Scholarships</PageTitle>
            <div className="flex-[1] grid grid-cols-1 md:grid-cols-4 gap-8">
                <FilterMenu className="max-md:hidden" onSubmit={handleFilterSubmit}/>
                <article className="md:col-span-3 col-span-1 flex flex-col gap-6">
                    <div className="flex gap-4">
                        <FilterButton_Modal />
                        <SearchBar
                            onSubmit={handleSubmit}
                            name="search"
                            placeholder="Cari beasiswa"
                            includeButton
                            className="flex-[1]"
                        />
                    </div>
                        <InfiniteScroll
                            url_with_limit_and_offset_query={url}
                            limit={8}
                        />

                </article>
            </div>
        </PageContainer>
    )
}
