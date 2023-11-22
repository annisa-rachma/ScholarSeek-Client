import { Link } from "react-router-dom"
import MiniNavProfile from "./MiniNavProfile"
import NavbarProfileDropDown from "./NavbarProfileDropDown"
import { useSelector } from "react-redux"

export default function NavbarProfile({ isLoggedIn, forMobile }) {
    const user = useSelector(store => store.user)

    if (isLoggedIn)
        return (
            <div className="relative group ">
                <MiniNavProfile
                    username={user.name}
                    image={user.profileImg}
                    role={user.role}
                />
                <NavbarProfileDropDown className="absolute bottom-[-5px] translate-y-[100%] right-0 duration-300 overflow-hidden max-h-[0px] group-hover:max-h-[200px]" />
            </div>
        )

    return (
        <div className={`flex ${forMobile ? 'flex-col items-end': 'flex-row'} gap-[30px]`}>
            <Link
                to="/log-in"
                className={`border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-md ${forMobile ? 'text-end max-w-max': 'text-center'} `}
            >
                Login
            </Link>
            <Link
                to="/register"
                className={`bg-primary text-white hover:bg-[#2b4bc9] px-6 py-2 rounded-md ${forMobile ? 'text-end max-w-max': 'text-center'} `}
            >
                Sign Up
            </Link>
        </div>
    )
}
