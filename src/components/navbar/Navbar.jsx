import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import NavbarMobileMenu from "./NavbarMobileMenu"
import NavbarProfile from "./NavbarProfile"

export default function Navbar({ toggleNav, closeNav, isOpen }) {
    const links = [
        { to: "/", name: "Home" },
        { to: "/scholarships", name: "Scholarships" },
        { to: "/about", name: "About" },
        { to: "/mentoring", name: "Mentoring" },
        { to: "/mentoring/room/ceritanya-ini-room-id", name: "Mentor Room" },
        { to: "/join-room", name: "Join" },
        { to: "/forum", name: "Forum" },
    ]

    return (
        <>
            <nav className="fixed bg-white w-full z-[50] h-[75px] flex flex-col shadow-sm">
                <div className="p-4 flex-[1] max-w-[1300px] w-full mx-auto flex justify-between text-2xl items-center">
                    <NavLink to="/" className="logo-font">
                        ScholarSeek
                    </NavLink>

                    <button
                        type="button"
                        onClick={toggleNav}
                        className="p-2 md:hidden"
                    >
                        {isOpen ? <CgClose /> : <HiOutlineMenuAlt3 />}
                    </button>

                    <div className="hidden md:flex items-center gap-[40px] text-base font-semibold">
                        {links.map((link) => (
                            <NavLink
                                className="navbar"
                                key={link.to}
                                to={link.to}
                                end
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavbarProfile isLoggedIn />
                    </div>
                </div>
            </nav>
            <NavbarMobileMenu
                isOpen={isOpen}
                className="z-[48]"
                handleClose={closeNav}
                links={links}
            />
        </>
    )
}
