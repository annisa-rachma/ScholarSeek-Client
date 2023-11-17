import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"

export default function RootLayout() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleNav() {
        setIsOpen((prev) => !prev)
    }
    function closeNav() {
        if (!isOpen) return
        setIsOpen(false)
    }
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar isOpen={isOpen} toggleNav={toggleNav} closeNav={closeNav}/>
            <main
                onClick={closeNav}
                className={`pt-[75px] flex-[1] w-full max-w-[1300px] mx-auto flex flex-col gap-16 md:gap-24 overflow-hidden`}
            >
                <Outlet />
            </main>
        </div>
    )
}
