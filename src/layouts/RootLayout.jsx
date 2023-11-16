import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
    return (
        <div>
            <h1>INI ROOT LAYOUTT</h1>
            <Navbar/>
            <Outlet />
        </div>
    )
}
