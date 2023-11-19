import { Link } from "react-router-dom"

export default function Footer() {
    const links = [
        { to: "/", name: "Home" },
        { to: "scholarships", name: "Scholarships" },
        { to: "about", name: "About" },
    ]
    return (
        <footer className="border-t border">
            <div className="w-full max-w-[1300px] mx-auto flex justify-between p-8 text-slate-500">
                <p>&copy; Copyright 2023 - HCK63</p>
                <div className="flex gap-5">
                    {links.map((link) => (
                        <Link className="navbar" key={link.to} to={link.to}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
