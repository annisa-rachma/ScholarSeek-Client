import ScholarshipCard from "../../components/cards/ScholarshipCard"
import Loading from "../../components/Loading"
import PageContainer from "../../components/PageContainer"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export default function BookmarkScholarship() {
    const { slug } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: [slug],
        queryFn: async () => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + `/bookmarks/scholarships`,
                    {
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    }
                )
                const bookmarkedScholarships = await res.json()
                return bookmarkedScholarships
            } catch (err) {
                console.log(err)
            }
        },
    })

    return (
        <>
            <PageContainer>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                        {data.length > 0 &&
                            data.map((scholarship, i) => (
                                <ScholarshipCard key={i} {...scholarship} />
                            ))}
                    </div>
                )}
            </PageContainer>
        </>
    )
}
