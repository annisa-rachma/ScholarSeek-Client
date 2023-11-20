import CountryBubble from "../../../components/textBubble/CountryBubble"
import DegreeBubble from "../../../components/textBubble/DegreeBubble"
import SecondaryBubble from "../../../components/textBubble/SecondaryBubble"

export default function HeaderInfo({
    isFullyFunded,
    name,
    countries,
    countryCode,
    degrees,
    registrationOpen,
    registrationDeadline,
}) {
    let fundingType
    if(isFullyFunded == true) {
        fundingType = 'Fully Funded'
    } else {
        fundingType = 'Partially Funded'
    }
    return (
        <article className="flex flex-col gap-3 md:gap-3 text-primary leading-none max-w-[80%]">
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="font-light text-sm md:text-lg">{fundingType}</p>
                <h1 className="font-extrabold  md:text-2xl">
                {name}
                </h1>
            </div>
            <div className="flex gap-4">
            {countries?.map((country, i) => (
                        <CountryBubble
                        key={i}
                        country={country}
                        countryCode={countryCode}
                    />
                    ))}
                {degrees?.map((degree, i) => (
                        
                        <DegreeBubble key={i} degree={degree} />
                    ))}
            </div>
            <div className="flex gap-4 text-[16px]">
                <SecondaryBubble className="text-primary flex gap-2">
                    <span className="font-extrabold">Open</span>
                    <p>{registrationOpen}</p>
                </SecondaryBubble>
                <SecondaryBubble className='text-red-500 flex gap-2'>
                    <span className="font-extrabold">Deadline</span>
                    <p>{registrationDeadline}</p>
                </SecondaryBubble>
            </div>
        </article>
    )
}
