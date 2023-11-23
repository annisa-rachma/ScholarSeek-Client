import React from 'react'
import PageContainer from "../../../components/PageContainer";
import MiniProfile from "../../../components/MiniProfile";
import IconWithNum from "../../../components/IconWithNum";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import BookmarkButton from "../../../components/buttons/BookmarkButton";


export default function HeadThread({thread}) {
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
    <PageContainer className="flex flex-col gap-6">
      <div className="border border-primary relative rounded-xl py-4 px-6 flex flex-col gap-3">
        {/* <Link to={slug} className="absolute left-0 top-0 w-full h-full"></Link> */}
        <MiniProfile
          title={thread?.username}
          desc={thread?.createdAt}
          image={thread?.profileImg}
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-primary text-xl ellipsis-3">
            {thread?.title}
          </h1>
          <p className="text-slate-500 text-[12px] md:text-sm ellipsis-4">
            {thread?.content}
          </p>
        </div>
        <div className="border border-b-primary" />
        <section className="flex justify-between items-center">
          <div className="flex text-primary flex-wrap text-2xl gap-3 md:gap-5">
            <IconWithNum
              onClick={handleLike}
              className="relative z-[2]"
              icon={<AiOutlineLike />}
              num={thread?.like}
            />
            <IconWithNum
              onClick={handleDislike}
              className="relative z-[2]"
              icon={<AiOutlineDislike />}
              num={thread?.dislike}
            />
            <IconWithNum icon={<VscComment />} num={thread?.Comments.length} />
          </div>
          <BookmarkButton
            className="relative z-[2] p-2 text-2xl"
            onClick={addBookmark}
          />
        </section>
      </div>
    </PageContainer>
  )
}
