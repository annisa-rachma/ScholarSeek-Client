export default function MiniNavProfile({username, role, image}) {
  return (
    <div className="flex items-center gap-4">
        <div className="flex flex-col text-[12px] sm:text-sm leading-none text-end">
            <p className="text-primary font-bold">{username}</p>
            <p className="text-primary font-light ">{role}</p>
        </div>
        <div className="h-[35px] w-[35px] grid place-content-center bg-slate-200 rounded-full overflow-hidden">
            <img src={image} className="h-[35px] w-[35px]" alt={`${username}'s profile picture`} />
        </div>
    </div>
  )
}
