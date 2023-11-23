import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function ProfileNav() {
    const user = useSelector((state) => {
        return state.user
    })
    const links = [
        { to: `${user.slug}`, name: "Overview" },
        { to: `${user.slug}/bookmarks/scholarships`, name: "Scholarships Bookmarks" },
        { to: `${user.slug}/bookmarks/forum`, name: "Forum Bookmarks" },
        { to: `${user.slug}/bookmarks/mentoring`, name: "Mentoring Session" },
    ] 



    return(
        <>
        <div className="flex flex-wrap justify-center md:justify-evenly gap-4 text-center">
            {links.map((link) => (
              <NavLink className="text-slate-400 flex items-center justify-center profile-nav p-1 flex-[1]" key={link.to} end to={link.to}>
                <p>
                {link.name}

                </p>
              </NavLink>
            ))}
          </div>
        </>
    )
}