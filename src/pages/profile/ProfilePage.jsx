import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"
import PageContainer from "../../components/PageContainer"
import { fetchUserDetail } from "../../stores/actions/actionUser"
import HeaderProfile from "./detail/Header"
import ProfileNav from "./detail/ProfileNav"
import { useQuery } from "@tanstack/react-query"

export default function ProfilePage() {
    //   const [loading, setLoading] = useState(false)
    const user = useSelector((state) => {
        return state.user
    })
    // console.log(user)
    const { slug } = useParams()

    const {data:userDetail, isLoading} = useQuery({
        queryKey: [slug],
        queryFn: async () => {
            try {
                const res = await fetch(import.meta.env.VITE_BASE_URL + `/profile/${slug}`, {
                    headers: {access_token: localStorage.getItem('access_token')}
                })
                const userDetail = await res.json()
                return userDetail
            } catch (err) {
                console.log(err)
            }
        }
    })
    console.log(userDetail)
    // const dispatch = useDispatch()

    //     const fetchData = async () => {
    //     try {
    //       setLoading(true);
    //       await dispatch(fetchUserDetail(slug));
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    return (
        <>
                <HeaderProfile
                    profileImg={userDetail?.profileImg}
                    username={userDetail?.username}
                    status={userDetail?.status}
                />
                <div className="flex-[1] ">
                    <ProfileNav />
                </div>
        </>
    )
}
