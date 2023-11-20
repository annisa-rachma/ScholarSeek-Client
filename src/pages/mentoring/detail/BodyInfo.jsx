import Button from "../../../components/Button"
import MiniProfile from "../../../components/MiniProfile"
import TextBubble from "../../../components/textBubble/TextBubble"
import Attendees from "./Attendees"

export default function BodyInfo({ image, desc, user, topics, className, totalAttendees, atendees }) {

    return (
        <article
            className={`grid grid-cols-1  lg:grid-cols-3 gap-4 md:gap-8 ${className}`}
        >
            <div className="flex flex-col gap-4 lg:col-span-2">
                <div className="w-full h-full max-h-[350px] max-w-max overflow-hidden mx-auto rounded-xl">
                    <img
                        src={image}
                        alt="thumbnail"
                        className="h-full w-full object-contain "
                    />
                </div>
                <p className="text-slate-500 text-[12px] sm:text-sm md:text-base mx-auto text-center md:text-start">
                    {desc}
                </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
                <Button className="bg-primary text-white">Gabung</Button>
                <Attendees 
                    totalAttendees={totalAttendees}
                    attendees={atendees}
                />
                <div className="flex flex-col gap-2">
                    <p className="font-extrabold text-primary">Pembicara</p>
                    <MiniProfile
                        title={user.username}
                        image={user.profilePicture}
                        desc={user.status}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-extrabold text-primary">Topik</p>
                    <div className="flex gap-2 flex-wrap">
                        {topics?.map((topic, i) => (
                            <TextBubble
                                key={i}
                                className="bg-accent_pink text-primary"
                            >
                                {topic}
                            </TextBubble>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
