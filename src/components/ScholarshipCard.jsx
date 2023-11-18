import { Link } from "react-router-dom"
import CountryBubble from "./textBubble/CountryBubble"
import DegreeBubble from "./textBubble/DegreeBubble"

export default function ScholarshipCard({
    fundingType,
    title,
    country,
    countryCode,
    degree,
    open,
    deadline,
    className,
    slug
}) {
    return (
        <Link
            to={`/scholarships/${slug}`}
            className={`bg-secondary/30 text-primary rounded-xl group p-6 flex ${className}`}
        >
            <div className="flex flex-[1] flex-col gap-3 group-hover:translate-y-[-3px] duration-200">
                <p className="text-sm md:text-base font-light">{fundingType}</p>
                <h2 className="font-extrabold text-base md:text-lg ellipsis-3">{title}</h2>
                <section className="flex gap-4 items-center">
                    <CountryBubble country={country} countryCode={countryCode}/>
                    <DegreeBubble degree={degree}/>
                </section>
                <section className="p-3 rounded-xl bg-white grid grid-cols-2 text-[12px] sm:text-base">
                    <p className="font-bold">Open</p>
                    <p className="font-light text-end">{open}</p>
                    <p className="font-bold">Deadline</p>
                    <p className="font-light text-orange-500  text-end">{deadline}</p>
                </section>
            </div>
        </Link>
    )
}
