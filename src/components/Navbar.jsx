import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
    </nav>
  )
}
