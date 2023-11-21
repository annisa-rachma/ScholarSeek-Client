import { Link } from "react-router-dom"
import CountryBubble from "../textBubble/CountryBubble"
import DegreeBubble from "../textBubble/DegreeBubble"
import getFormattedList from "../../lib/getFormattedList"

export default function ScholarshipCard({
    isFullyFunded,
    name,
    countries,
    countryCode,
    degrees,
    registrationOpen,
    registrationDeadline,
    className,
    slug,
}) {
    let fundingType
    if(isFullyFunded == true) {
        fundingType = 'Fully Funded'
    } else {
        fundingType = 'Partially Funded'
    }

    const formattedDegrees = getFormattedList(degrees)
    return (
        <Link
            to={`/scholarships/${slug}`}
            className={`bg-secondary/30 text-primary rounded-xl group p-6 flex flex-col ${className}`}
        >
            <div className="flex flex-[1] flex-col gap-3 group-hover:translate-y-[-3px] duration-200">
                <p className="text-sm md:text-base font-light">{fundingType}</p>
                <h2 className="font-extrabold text-base md:text-lg ellipsis-3">
                    {name}
                </h2>
                <section className="flex flex-[1] flex-wrap gap-2 items-center">
                    {countries?.map((country, i) => (
                        <CountryBubble
                        key={i}
                        country={country}
                        countryCode={countryCode}
                        
                    />
                    ))}
                    
                    <DegreeBubble degree={formattedDegrees} />
                </section>
                <section className="p-3 rounded-xl bg-white grid grid-cols-2 text-[12px] sm:text-base">
                    <p className="font-bold">Open</p>
                    <p className="font-light text-end">{registrationOpen}</p>
                    <p className="font-bold">Deadline</p>
                    <p className="font-light text-orange-500  text-end">
                        {registrationDeadline}
                    </p>
                </section>
            </div>
        </Link>
    )
}
