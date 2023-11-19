import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Loading({className}) {
  return (
    <div className={`flex flex-[1] justify-center items-center ${className}`}>
        <AiOutlineLoading3Quarters className="animate-spin text-slate-300 text-6xl"/>
    </div>
  )
}
