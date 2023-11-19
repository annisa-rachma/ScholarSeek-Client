export default function MiniProfile({ title, desc, image, reverse }) {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-4`}>
            <div className="h-[35px] w-[35px] grid place-content-center rounded-full overflow-hidden">
                <img
                    src={image}
                    className="object-cover"
                    alt={`profile picture`}
                />
            </div>
            <div className={`flex flex-col text-[12px] sm:text-sm leading-none text-end ${reverse ? 'items-end': 'items-start'}`}>
                <p className="text-primary font-bold">{title}</p>
                <p className="text-slate-500 font-light ">{desc}</p>
            </div>
        </div>
    )
}
