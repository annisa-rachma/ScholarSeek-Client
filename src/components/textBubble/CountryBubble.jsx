export default function CountryBubble({ country, countryCode }) {
    return (
        <div className="bg-primary py-1 md:py-2 px-4 rounded-full flex gap-2">
            <div className="hidden md:block">
                <img
                    className="rounded-sm "
                    src={`https://flagsapi.com/${countryCode}/flat/24.png`}
                    alt={`${country} flag`}
                />
            </div>
            <p className="font-light text-white text-sm md:text-base ellipsis-1">{country}</p>
        </div>
    )
}
