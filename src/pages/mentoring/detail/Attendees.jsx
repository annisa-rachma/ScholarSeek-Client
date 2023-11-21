export default function Attendees({ attendees, totalAttendees }) {
    const IMAGE_WIDTH = 40

    return (
        <div className="flex flex-wrap gap-2 items-center">
            <div
                style={{
                    height: `${IMAGE_WIDTH}px`,
                    width: `${attendees?.length * (IMAGE_WIDTH * 0.9)}px`,
                }}
                className={`relative`}
            >
                {attendees?.map((el, i) => (
                    <img
                        key={i}
                        src={el}
                        alt=""
                        style={{
                            maxWidth: `${IMAGE_WIDTH}px`,
                            transform: `translateX(${
                                i * (IMAGE_WIDTH * 0.65)
                            }px)`,
                            zIndex: i,
                        }}
                        className={`absolute rounded-full border-2`}
                    />
                ))}
            </div>
            <p className="text-slate-500">
                {totalAttendees}/20 hadir
            </p>
        </div>
    )
}
