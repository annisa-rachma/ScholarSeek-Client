import { CgCalendarDates } from "react-icons/cg"

export default function HeaderInfo({ date, time, title }) {
    return (
        <article className="flex flex-col gap-3 md:gap-3 text-primary leading-none max-w-[80%]">
            <h1 className="font-extrabold  md:text-2xl">
                {title}
            </h1>
            <div className="flex items-center gap-1 md:gap-3">
                <CgCalendarDates className="text-xl md:text-4xl"/>
                <span className="text-[12px] md:text-base">
                    {date} - {time}
                </span>
            </div>
        </article>
    )
}
