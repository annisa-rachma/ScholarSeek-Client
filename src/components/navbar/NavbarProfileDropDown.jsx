import { Link, useNavigate } from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai"
import { HiOutlineBookmark } from "react-icons/hi2"
import { LuLogOut } from "react-icons/lu"

export default function NavbarProfileDropDown({ className }) {
    let navigate = useNavigate()
    const links = [
        { icon: <AiOutlineUser />, name: "Profile", to: `/profile/${localStorage.slug}` },
        { icon: <HiOutlineBookmark />, name: "BookMarks", to: "/bookmarks/scholarships" },
        // { icon: <LuLogOut />, name: "Logout", to: "/logout" },
    ]

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className={`flex flex-col w-[140%] rounded-md bg-primary font-light text-white ${className}`}>
            <div className="py-3">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        className="flex gap-3 group hover:bg-black/10 px-5 py-2"
                    >
                        <div className="text-xl grid place-content-center">
                        {link.icon}
                        </div>
                        <p>{link.name}</p>
                    </Link>
                ))}
                    <div
                        onClick={handleLogout}
                        key="Logout"
                        // to={link.to}
                        className="flex gap-3 group hover:bg-black/10 px-5 py-2 cursor-pointer"
                    >
                        <div className="text-xl grid place-content-center">
                        <LuLogOut />
                        </div>
                        <p>Logout</p>
                    </div>
            </div>
        </div>
    )
}
