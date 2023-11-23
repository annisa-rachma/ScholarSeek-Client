import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import PageContainer from "../../components/PageContainer"


export default function BookmarkForum() {
    const { slug } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: [slug],
        queryFn: async () => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + '/bookmarks/thread',
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
    console.log(data)
  return (
    <>
      <PageContainer className={`mb-12`}>
        <div className="relative mt-[350px] flex-[1] ">
          <div className="flex flex-col gap-4 ">forum</div>
        </div>
      </PageContainer>
    </>
  );
}
