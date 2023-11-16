import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar/>
            <main className="flex-[1] z-[9]">
                <Outlet />
            </main>
        </div>
    )
}
