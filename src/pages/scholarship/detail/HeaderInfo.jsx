import CountryBubble from "../../../components/textBubble/CountryBubble"
import DegreeBubble from "../../../components/textBubble/DegreeBubble"
import SecondaryBubble from "../../../components/textBubble/SecondaryBubble"

export default function HeaderInfo() {
    return (
        <article className="flex flex-col gap-3 md:gap-3 text-primary leading-none max-w-[80%]">
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="font-light text-sm md:text-lg">Beasiswa Fully Funded</p>
                <h1 className="font-extrabold  md:text-2xl">
                    Beasiswa ADB JSP - National Graduate Institute for Policy
                    Studies - MP1, MP2
                </h1>
            </div>
            <div className="flex gap-4">
                <CountryBubble countryCode="JP" country="Jepang" />
                <DegreeBubble degree="S2" />
            </div>
            <div className="flex gap-4 text-[12px]">
                <SecondaryBubble className="text-primary flex gap-2">
                    <span className="font-extrabold">Open</span>
                    <p>01 Okt 2023</p>
                </SecondaryBubble>
                <SecondaryBubble className='text-orange-500 flex gap-2'>
                    <span className="font-extrabold">Open</span>
                    <p>01 Okt 2023</p>
                </SecondaryBubble>
            </div>
        </article>
    )
}
