import Button from "../../../components/Button"
import MiniProfile from "../../../components/MiniProfile"
import TextBubble from "../../../components/textBubble/TextBubble"
import Attendees from "./Attendees"

export default function BodyInfo({ image, desc, user, topics, className }) {
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
                    totalAttendees={9}
                    attendees={[
                        "https://cdn.discordapp.com/avatars/707500844043599884/f0bf7883074d39a82ace74bcccabf051?size=1024",
                        "https://cdn.discordapp.com/avatars/763228927975489568/a327b6c897b35b21579dd3533dd3035a?size=1024",
                        "https://cdn.discordapp.com/avatars/1019198616801398795/b2ba2ee68796b364c087199bf6ef61e1?size=1024",
                        "https://cdn.discordapp.com/avatars/712147163882192947/83bc7b2c6128935b343af5adf07f7119?size=1024",
                    ]}
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
                        {topics.map((topic, i) => (
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
