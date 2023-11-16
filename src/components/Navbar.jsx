import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import Button from "./Button"
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
            <nav className="relative z-[50] shadow-md h-[75px] flex flex-col">
                <div className="p-4 flex-[1] flex justify-between text-2xl items-center">
                    <NavLink to="/" className="font-bold">
                        ScholarSeek
                    </NavLink>

                    <Button onClick={toggleNav} className="p-2 md:hidden">
                        {isOpen ? <CgClose /> : <HiOutlineMenuAlt3 />}
                    </Button>

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
