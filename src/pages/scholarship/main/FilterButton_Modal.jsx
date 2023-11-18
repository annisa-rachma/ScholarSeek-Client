import { useState } from "react"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { CgClose } from "react-icons/cg"
import FilterMenu from "./FilterMenu"

export default function FilterButton_Modal() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button
                className="h-full md:hidden aspect-square border border-primary text-primary grid place-content-center rounded-xl"
                onClick={() => setIsOpen(true)}
            >
                <HiOutlineAdjustmentsHorizontal className="text-4xl" />
            </button>
            {isOpen && (
                <>
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed md:hidden z-[100] top-0 left-0 w-full h-screen bg-slate-500/30"
                    ></div>
                </>
            )}
            <article
                className={`fixed md:hidden z-[101] bottom-0 left-0 w-full rounded-t-3xl bg-white duration-500 ${
                    isOpen ? "max-h-[100vh] p-6" : "max-h-[0vh]"
                }`}
            >
                <button
                    className="absolute right-6 top-6"
                    onClick={() => setIsOpen(false)}
                >
                    <CgClose className="text-3xl text-slate-500" />
                </button>
                <FilterMenu />
            </article>
        </>
    )
}
