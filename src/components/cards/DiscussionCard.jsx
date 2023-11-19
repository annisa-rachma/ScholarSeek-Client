import { Link } from "react-router-dom"
import MiniProfile from "../MiniProfile"
import IconWithNum from "../IconWithNum"
import BookmarkButton from "../BookmarkButton"
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"

export default function DiscussionCard({
    title,
    slug,
    desc,
    user,
    createdAt,
    likes,
    dislikes,
    commentCount,
}) {
    function addBookmark() {
        alert("Discussion Bookmarked!")
    }

    function handleLike() {
        alert("Liked! :D")
    }
    function handleDislike() {
        alert("Disliked! D:<")
    }

    return (
        <div className="border border-primary relative rounded-xl py-4 px-6 flex flex-col gap-3">
            <Link
                to={slug}
                className="absolute left-0 top-0 w-full h-full"
            ></Link>
            <MiniProfile
                title={user.username}
                desc={createdAt}
                image={user.profilePicture}
            />
            <div className="flex flex-col gap-1">
                <h1 className="font-extrabold text-primary text-xl ellipsis-3">
                    {title}
                </h1>
                <p className="text-slate-500 text-[12px] md:text-sm ellipsis-4">
                    {desc}
                </p>
            </div>
            <div className="border border-b-primary" />
            <section className="flex justify-between items-center">
                <div className="flex text-primary flex-wrap text-2xl gap-3 md:gap-5">
                    <IconWithNum
                        onClick={handleLike}
                        className="relative z-[2]"
                        icon={<AiOutlineLike />}
                        num={likes}
                    />
                    <IconWithNum
                        onClick={handleDislike}
                        className="relative z-[2]"
                        icon={<AiOutlineDislike />}
                        num={dislikes}
                    />
                    <IconWithNum icon={<VscComment />} num={commentCount} />
                </div>
                <BookmarkButton
                    className="relative z-[2] p-2 text-2xl"
                    onClick={addBookmark}
                />
            </section>
        </div>
    )
}
