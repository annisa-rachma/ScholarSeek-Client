import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({placeholder}) {
  return (
    <form className="p-2 flex items-center gap-4 border border-primary rounded-xl">
        <label htmlFor="searchIcon" className="ml-2 text-3xl text-primary">
            <IoSearchOutline/>
        </label>
        <input type="text" id="searchIcon" placeholder={placeholder} className="flex-[1]"/>
        <button type="submit" className="py-2 px-5 rounded-md bg-primary text-white">
            Search
        </button>
    </form>
  )
}
