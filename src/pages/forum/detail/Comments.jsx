import React from "react";
import MiniProfile from "../../../components/MiniProfile";
import IconWithNum from "../../../components/IconWithNum";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export default function Comments({ comment }) {
  function addBookmark() {
    alert("Discussion Bookmarked!");
  }

  function handleLike() {
    alert("Liked! :D");
  }
  function handleDislike() {
    alert("Disliked! D:<");
  }

  return (
    <>
    
        <MiniProfile
          title={comment?.User.username}
          desc={comment?.createdAt}
          image={comment?.User.profileImg}
        />
        <div className="flex flex-col gap-1">
          <p className="text-slate-500 text-[12px] md:text-sm ellipsis-4">
            {comment?.content}
          </p>
        </div>
        <section className="flex justify-between items-center">
          <div className="flex text-primary flex-wrap text-2xl gap-3 md:gap-5">
            <IconWithNum
              onClick={handleLike}
              className="relative z-[2]"
              icon={<AiOutlineLike />}
              num={comment?.like}
            />
            <IconWithNum
              onClick={handleDislike}
              className="relative z-[2]"
              icon={<AiOutlineDislike />}
              num={comment?.dislike}
            />
          </div>
        </section>
        <div className="border border-b-primary" />

    </>
  );
}
