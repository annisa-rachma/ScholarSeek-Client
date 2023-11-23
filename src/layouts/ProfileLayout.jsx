import { Outlet } from "react-router-dom"
import HeaderProfile from "../pages/profile/detail/Header"
import ProfileNav from "../pages/profile/detail/ProfileNav"
import { useSelector } from "react-redux"

export default function ProfileLayout() {
    const user = useSelector((store) => store.user)
    return (
        <div className="flex-[1] flex flex-col">
            <HeaderProfile
                profileImg={user?.profileImg}
                username={user?.username}
                status={user?.status}
            />
            <div className="max-w-[1300px] w-full flex-[1] mx-auto pb-24 flex flex-col gap-6">
                    <ProfileNav />
                    <Outlet />
            </div>
        </div>
    )
}
