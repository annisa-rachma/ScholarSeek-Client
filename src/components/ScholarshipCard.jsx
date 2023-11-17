import { Link } from "react-router-dom"

export default function ScholarshipCard({
    fundingType,
    title,
    country,
    countryCode,
    degree,
    open,
    deadline,
    className,
    to,
}) {
    return (
        <Link
            to={to}
            className={`bg-secondary/30 text-primary rounded-xl group p-6 flex ${className}`}
        >
            <div className="flex flex-col gap-3 group-hover:translate-y-[-3px] duration-200">
                <p className="font-light">{fundingType}</p>
                <h2 className="font-extrabold text-lg">{title}</h2>
                <section className="flex gap-4 items-center">
                    <div className="bg-accent_yellow py-2 px-4 rounded-full flex gap-2">
                        <img
                            className="rounded-sm "
                            src={`https://flagsapi.com/${countryCode}/flat/24.png`}
                            alt={`${country} flag`}
                        />
                        <p className="font-light">{country}</p>
                    </div>
                    <p className="bg-accent_pink py-1 px-4 rounded-full">
                        {degree}
                    </p>
                </section>
                <section className="p-2 rounded-xl bg-secondary grid grid-cols-2">
                    <p className="font-bold">Open</p>
                    <p className="font-light">{open}</p>
                    <p className="font-bold">Deadline</p>
                    <p className="font-light text-orange-500">{deadline}</p>
                </section>
            </div>
        </Link>
    )
}
