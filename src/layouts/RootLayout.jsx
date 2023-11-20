import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import ScrollToTop from '../utlis/ScrollToTop'

export default function RootLayout() {
   const currentPath = useLocation().pathname

   const [isOpen, setIsOpen] = useState(false)
   function toggleNav() {
      setIsOpen((prev) => !prev)
   }
   function closeNav() {
      if (!isOpen) return
      setIsOpen(false)
   }
   return (
      <>
         <ScrollToTop />
         <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar isOpen={isOpen} toggleNav={toggleNav} closeNav={closeNav} />
            <main
               onClick={closeNav}
               className={`pt-[75px] flex-[1] w-full ${
                  currentPath.includes('/mentoring/room/')
                     ? ''
                     : 'max-w-[1300px] mx-auto pb-6'
               } flex flex-col gap-16 md:gap-24 overflow-hidden`}
            >
               <Outlet />
            </main>
            <Footer />
         </div>
      </>
   )
}
