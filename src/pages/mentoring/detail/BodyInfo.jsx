import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import MiniProfile from "../../../components/MiniProfile";
import TextBubble from "../../../components/textBubble/TextBubble";
import { handleAddMentoringBookmark, handleEditStatusMentoring } from "../../../stores/actions/actionMentoring";
import Attendees from "./Attendees";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import showToast from "../../../utlis/showToast";

export default function BodyInfo({
  image,
  desc,
//   user,
  topics,
  className,
  totalAttendees,
  atendees,
  atendeesImage,
  CreatorId,
  mentoringStatus,
  quota
}) {
    const user = useSelector(store => store.user)
    // console.log(user)
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const 
  const startRoom = async () => {
    await dispatch(handleEditStatusMentoring(slug));
    navigate(`/mentoring/room/${slug}`)
  }

  const startMentoring = async () => {
    navigate(`/mentoring/room/${slug}`)
  }

  const addBookMark = async () => {
    // console.log('masuk')
    try {
      await dispatch(handleAddMentoringBookmark(slug));
      showToast('info', 'success joining mentoring session')
    } catch (error) {
      console.log(error);
      showToast('error', error.message)
    }
  };

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
        {/* kalau belum join mentoring, dan mau join*/}
        {(!atendees?.includes(Number(user.id)) && atendees?.length < quota) && (
          <Button onClick={addBookMark} className="bg-primary text-white">
            Daftar Sesi
          </Button>
        )}
        {/* kalau sudah join mentoring, dan mentoring belum dimulai*/}
        {(atendees?.includes(Number(user.id)) && user.id != CreatorId && mentoringStatus != 'ongoing'  ) && (
            <Button className="bg-slate-600 text-white">Upcoming</Button>
        )}

        {/* bagi mentor untuk memulai sesi*/}
        {(user.id == CreatorId && user.role == 'awardee' && mentoringStatus != 'ongoing'   ) && (
            <Button onClick={startRoom}  className="bg-primary hover:bg-[#2a47bb] text-white">start room</Button>
        )}

        {/*bagi peserta saat sesi mulai untuk join ke room*/}
        {(atendees?.includes(Number(user.id)) && mentoringStatus == 'ongoing' ) && (
            <Button onClick={startMentoring}  className="bg-primary hover:bg-[#2a47bb] text-white">join session</Button>
        )}

        {/*kuota penuh*/}
        {(atendees?.length == quota && user.id != CreatorId ) && (
            <Button className="bg-slate-600 text-white">fully booked</Button>
        )}

        <Attendees totalAttendees={totalAttendees} attendees={atendeesImage} quota={quota} />
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
              <TextBubble key={i} className="bg-accent_pink text-primary">
                {topic}
              </TextBubble>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
