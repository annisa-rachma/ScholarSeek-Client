import { Link } from "react-router-dom"
import MiniProfile from "../MiniProfile"
import NavbarProfileDropDown from "./NavbarProfileDropDown"

export default function NavbarProfile({ isLoggedIn, forMobile }) {
    if (isLoggedIn)
        return (
            <div className="relative group ">
                <MiniProfile
                    username="Bambang"
                    image="https://source.boringavatars.com/beam/40/eehehe"
                    role="Mentee"
                />
                <NavbarProfileDropDown className="absolute bottom-[-5px] translate-y-[100%] right-0 duration-300 overflow-hidden max-h-[0px] group-hover:max-h-[200px]" />
            </div>
        )

    return (
        <div className={`flex ${forMobile ? 'flex-col items-end': 'flex-row'} gap-[30px]`}>
            <Link
                to="/log-in"
                className={`border border-primary text-primary px-6 py-2 rounded-md ${forMobile ? 'text-end max-w-max': 'text-center'} `}
            >
                Login
            </Link>
            <Link
                to="/sign-up"
                className={`bg-primary text-white px-6 py-2 rounded-md ${forMobile ? 'text-end max-w-max': 'text-center'} `}
            >
                Sign Up
            </Link>
        </div>
    )
}
