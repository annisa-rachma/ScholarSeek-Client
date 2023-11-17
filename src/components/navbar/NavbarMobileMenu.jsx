import { NavLink } from "react-router-dom"

export default function NavbarMobileMenu({ isOpen, links }) {
    return (
        <nav
            className={`z-[2] w-[70%] duration-300 top-[75px] h-full bg-white shadow-lg p-4 flex flex-col items-end gap-4
                ${isOpen ? "absolute right-[0%]" : "absolute right-[-100%]"}`}
        >
            {links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                    {link.name}
                </NavLink>
            ))}
        </nav>
    )
}
