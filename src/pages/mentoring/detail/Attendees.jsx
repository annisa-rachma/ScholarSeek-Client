export default function Attendees({ attendees, totalAttendees }) {
    const IMAGE_WIDTH = 40

    return (
        <div className="flex flex-wrap gap-2 items-center">
            <div
                style={{
                    width: `${attendees.length * (IMAGE_WIDTH * 0.75)}px`,
                }}
                className={`relative h-[${IMAGE_WIDTH}px]`}
            >
                {attendees.map((el, i) => (
                    <img
                        key={i}
                        src={el}
                        alt=""
                        style={{
                            transform: `translateX(${
                                i * (IMAGE_WIDTH * 0.65)
                            }px)`,
                            zIndex: i,
                        }}
                        className={`absolute max-w-[${IMAGE_WIDTH}px] rounded-full border-2`}
                    />
                ))}
            </div>
            <p className="text-slate-500">
                {totalAttendees}/20 hadir
            </p>
        </div>
    )
}
