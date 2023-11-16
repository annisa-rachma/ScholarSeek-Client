import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { useState } from "react"
import NavbarMobileMenu from "./NavbarMobileMenu"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleNav() {
        setIsOpen((prev) => !prev)
    }
    function closeNav() {
        if (!isOpen) return
        setIsOpen(false)
    }
    const links = [
        { to: "/", name: "Home" },
        { to: "scholarships", name: "Scholarships" },
        { to: "about", name: "About" },
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

                    <div className="hidden md:flex gap-[40px] text-base font-semibold">
                        {links.map((link) => (
                            <NavLink
                                className="navbar"
                                key={link.to}
                                to={link.to}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
            <NavbarMobileMenu
                isOpen={isOpen}
                className="z-[49]"
                handleClose={closeNav}
                links={links}
            />
        </>
    )
}
