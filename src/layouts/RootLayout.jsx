import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="pt-[75px] flex-[1] z-[9] w-full max-w-[1300px] mx-auto flex flex-col gap-16 md:gap-24 overflow-hidden">
                <Outlet />
            </main>
        </div>
    )
}
