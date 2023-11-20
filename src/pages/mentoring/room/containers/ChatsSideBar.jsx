import { useEffect, useState } from "react"
import BubbleIcon from "../buttons/BubbleIcon"
import { PiChatsLight } from "react-icons/pi"
import useWindowSize from "../../../../hooks/useWindowSize"
import CloseButton from "../../../../components/buttons/CloseButton"

export default function ChatsSideBar({ chats, pageHeight }) {
    const BREAKPOINT = 1024
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowSize()

    useEffect(() => {
        if (width > BREAKPOINT) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [width])

    return (
        <>
            {!isOpen && (
                <BubbleIcon
                    onClick={() => setIsOpen(true)}
                    icon={<PiChatsLight />}
                    className={`absolute right-5 top-5 z-[2]`}
                />
            )}
            <section
                style={{ height: `${pageHeight}vh` }}
                className={`text-white font-semibold max-lg:absolute lg:max-w-[30%] z-[3] w-full max-w-[80%] md:max-w-[40%] right-0 duration-300 ${
                    isOpen ? "translate-x-[0]" : "translate-x-[100%]"
                }`}
            >
                {width < BREAKPOINT && (
                    <header className="bg-primary py-4 px-6 flex items-center gap-7 justify-between">
                        <CloseButton
                            className="text-xl py-2"
                            onClick={() => setIsOpen(false)}
                        />
                    </header>
                )}
                <div className="overflow-y-scroll scrollbar p-4 flex flex-col gap-4 h-full bg-white text-slate-400">
                    {chats.map((chat, i) => (
                        <div
                            key={i}
                            className="py-2 px-4 flex flex-col bg-gray-100 rounded-xl"
                        >
                            <p className="text-primary/80">{chat.username}</p>
                            <p>{chat.value}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
