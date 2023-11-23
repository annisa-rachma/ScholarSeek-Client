import { useParams } from "react-router-dom"
import PageContainer from "../../components/PageContainer"
import { useQuery } from "@tanstack/react-query"

export default function ProfilePage() {
    const { slug } = useParams()

    const { data: userDetail } = useQuery({
        queryKey: [slug],
        queryFn: async () => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + `/profile/${slug}`,
                    {
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    }
                )
                const userDetail = await res.json()
                return userDetail
            } catch (err) {
                console.log(err)
            }
        },
    })

    return (
        <PageContainer className="flex flex-col gap-4 ">
            <h1 className="text-primary font-bold text-xl">Profile</h1>
            <h1 className="text-slate-600">{userDetail?.description}</h1>
            <h1 className="text-primary font-bold text-xl">Pendidikan</h1>
            <div className="p-6 border-[2px] border-primary rounded-xl flex flex-col gap-4">
                {userDetail?.schools?.map((school, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <div className="grid grid-cols-3 gap-3">
                            <p className="col-span-1 text-primary font-bold">School</p>
                            <p className="col-span-2 text-slate-500">{school.school}</p>
                            <p className="col-span-1 text-primary font-bold">Major</p>
                            <p className="col-span-2 text-slate-500">{school.major}</p>
                            <p className="col-span-1 text-primary font-bold">Scholarship</p>
                            <p className="col-span-2 text-slate-500">{school.scholarship}</p>
                            <p className="col-span-1 text-primary font-bold">year</p>
                            <p className="col-span-2 text-slate-500">{school.year}</p>
                        </div>
                        {i < userDetail?.schools.length - 1 && (
                            <div className="border-[1px] border-primary" />
                        )}
                    </div>
                ))}
            </div>
        </PageContainer>
    )
}
