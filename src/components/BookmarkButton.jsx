import { CiBookmark } from "react-icons/ci";

export default function BookmarkButton({className, onClick}) {
  return (
    <button className={`text-primary ${className}`} onClick={onClick}>
        <CiBookmark />
    </button>
  )
}
