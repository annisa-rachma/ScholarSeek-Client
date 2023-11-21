import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button"
import MiniProfile from "../../../components/MiniProfile"
import TextBubble from "../../../components/textBubble/TextBubble"
import { handleAddMentoringBookmark } from "../../../stores/actions/actionMentoring";
import Attendees from "./Attendees"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function BodyInfo({ image, desc, user, topics, className, totalAttendees, atendees }) {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [isJoin, setIsJoin] = useState(false)

    const addBookMark = async () => {
        // console.log('masuk')
      try {
       await dispatch(handleAddMentoringBookmark(slug))
      setIsJoin(true)
      toast.info("success joining mentoring session", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      } catch (error) {
        console.log(error)
        toast.error(error.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      }
    }
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
                {!isJoin && <Button onClick={addBookMark} className="bg-primary text-white">Gabung</Button>}
                {isJoin && 
                <Link to={'/mentoring/room/ceritanya-ini-room-id'} className="w-[100%]">
                <Button className="bg-primary text-white">
                    Masuk ke room</Button></Link>}

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
