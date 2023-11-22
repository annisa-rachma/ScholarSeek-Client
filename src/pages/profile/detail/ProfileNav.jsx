import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function ProfileNav() {
    const user = useSelector((state) => {
        return state.user
    })
    const links = [
        { to: `/profile/${user.slug}`, name: "Overview" },
        { to: `/profile/${user.slug}/bookmarks/scholarships`, name: "Scholarships Bookmarks" },
        { to: `/profile/${user.slug}/bookmarks/forum`, name: "Forum Bookmarks" },
        { to: "/bookmarks/mentoring", name: "Mentoring Session" },
    ]
    return(
        <>
        <div className="hidden md:flex items-center justify-between  text-base font-semibold border-b-[1px] border-slate-300">
            {links.map((link) => (
              <NavLink className="navbar" key={link.to} end to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </>
    )
}