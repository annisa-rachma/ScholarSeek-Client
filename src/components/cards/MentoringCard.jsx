import { Link } from "react-router-dom"
import MiniProfile from "../MiniProfile"

export default function MentoringCard({
    slug ,
          imageUrl ,
          schedule ,
          hour,
          title , profileImg,
          name,
          status, className
}) {
    // let name = `${User.firstName} ${User.lastName}`
    return (
        <Link
            to={`/mentoring/${slug}`}
            className={` border border-primary/30 text-primary overflow-hidden w-full rounded-xl group flex flex-col ${className}`}
        >
            <div className="max-h-[200px] overflow-hidden grid place-content-center">
                <img
                    src={imageUrl}
                    className="w-full h-full object-fill"
                    alt="thumbnail"
                />
            </div>
            <div className="py-4 px-6 flex flex-[1] flex-col gap-1 leading-none">
                <div className="flex flex-col">
                    <p className="text-slate-500 text-[12px]">
                        {schedule} - {hour}
                    </p>
                    <h2 className="md:text-lg font-extrabold  ellipsis-2 flex-[1] ">
                        {title}
                    </h2>
                </div>
                <MiniProfile
                    title={name}
                    image={profileImg}
                    desc={status}
                />
            </div>
        </Link>
    )
}
