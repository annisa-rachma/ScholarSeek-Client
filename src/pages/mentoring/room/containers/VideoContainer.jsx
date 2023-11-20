export default function VideoContainer({children}) {
  return (
    <div className="flex justify-center items-center border-primary border-2 rounded-full cursor-pointer overflow-hidden h-[100px] sm:h-[140px] lg:h-[170px] aspect-square">
        {children}
    </div>
  )
}
