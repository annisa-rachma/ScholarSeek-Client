import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"

export default function FilterModalButton() {
  return (
    <button className="grid h-full aspect-square md:hidden place-content-center border border-primary rounded-xl text-primary">
        <HiOutlineAdjustmentsHorizontal className="text-4xl" />
    </button>
  )
}
