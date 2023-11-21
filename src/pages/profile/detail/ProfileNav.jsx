import { NavLink } from "react-router-dom"

export default function ProfileNav() {
    const links = [
        { to: `/profile/${localStorage.slug}`, name: "Overview" },
        { to: "/bookmarks/scholarships", name: "Scholarships Bookmarks" },
        { to: "/bookmarks/forum", name: "Forum Bookmarks" },
        { to: "/bookmarks/mentoring", name: "Mentoring Session" },
    ]
    return(
        <>
        <div className="hidden md:flex items-center justify-between  text-base font-semibold border-b-[1px] border-slate-300">
            {links.map((link) => (
              <NavLink className="navbar" key={link.to} to={link.to} end>
                {link.name}
              </NavLink>
            ))}
          </div>
        </>
    )
}