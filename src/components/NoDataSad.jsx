import { TfiFaceSad } from "react-icons/tfi";

export default function NoDataSad() {
  return (
    <div className="flex flex-col items-center gap-5 text-slate-300">
        <TfiFaceSad className="text-[150px] "/>
        <h4 className="text-2xl">NO DATA FOUND :(</h4>
    </div>
  )
}
