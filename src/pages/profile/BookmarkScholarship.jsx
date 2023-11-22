import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ScholarshipCard from "../../components/cards/ScholarshipCard"
import Loading from "../../components/Loading"
import PageContainer from "../../components/PageContainer"
import { fetchBookmarkScholarship } from "../../stores/actions/actionBookmark"
import { fetchUserDetail } from "../../stores/actions/actionUser"
import HeaderProfile from "./detail/Header"
import ProfileNav from "./detail/ProfileNav"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export default function BookmarkScholarship() {
    const [loading, setLoading] = useState(false)
    const scholarships = useSelector((state) => {
        return state.bookmarkReducer.bookmarkScholarships
    })
    const dispatch = useDispatch()
    const { slug } = useParams()

    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(fetchBookmarkScholarship())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const user = useSelector((state) => {
        return state.userReducer.userDetail
    })

    const fetchDataUser = async () => {
        try {
            setLoading(true)
            await dispatch(fetchUserDetail(slug))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataUser()
    }, [])

    const {data} = useQuery({
        queryKey: ['bookmarks'],
        queryFn: async () => {
            const res = await fetch(import.meta.env.VITE_BASE_URL+ '/bookmarks/scholarships', {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem('access_token')
                } 
            })
            const data = await res.json()
            return data
        }
    })
    console.log(data)

    return (
        <>
            <PageContainer className={`mb-12`}>
                <HeaderProfile
                    name={user?.name}
                    profileImg={user?.profileImg}
                    status={user?.status}
                />

                <div className="relative mt-[350px] flex-[1] ">
                    <ProfileNav />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                        {loading && <Loading className="flex-[1]" />}
                        {!loading &&
                            scholarships?.map((scholarship, i) => (
                                <ScholarshipCard key={i} {...scholarship} />
                            ))}
                    </div>
                </div>
            </PageContainer>
        </>
    )
}
