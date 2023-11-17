export default function InfoSection({
    reverse,
    image,
    blockColor,
    title,
    desc,
    button,
}) {
    return (
        <article
            className={`flex ${
                reverse ? "flex-row-reverse" : "flex-row"
            } justify-between md:justify-center gap-6 sm:gap-12 md:gap-12 lg:gap-20 items-center md:px-16 lg:px-28`}
        >
            {/* image container */}
            <div className="flex h-[30vw] max-h-[30vh]">
                {/* color block */}
                <div
                    className={`${blockColor} w-[40vw] max-w-[300px] relative ${
                        reverse ? "rounded-l-3xl" : "rounded-r-3xl"
                    } md:rounded-3xl`}
                >
                    {/* img */}
                    <img
                        src={image}
                        alt="thumbnail"
                        className={`absolute w-[50vw] max-w-[350px] top-[50%] translate-y-[-50%] ${
                            reverse
                                ? "right-[50%] translate-x-[45%]"
                                : "left-[50%] translate-x-[-45%]"
                        }`}
                    />
                </div>
            </div>
            {/* info */}
            <div
                className={`flex flex-col gap-2 sm:gap-4 md:max-w-[60%] ${
                    reverse ? "pl-3" : "pr-3"
                }`}
            >
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
                    {title}
                </h1>
                <p className="text-[12px] sm:text-sm text-slate-400">{desc}</p>
                {button}
            </div>
        </article>
    )
}
