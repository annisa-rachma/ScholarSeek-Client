import { IoSearchOutline } from "react-icons/io5"

export default function SearchBar({
    placeholder,
    includeButton,
    reverse,
    secondary,
    onSubmit,
    name,
    className
}) {
    return (
        <form
            onSubmit={(e) => onSubmit(e)}
            className={`py-2 pl-4 pr-2 flex  ${
                reverse ? "flex-row-reverse" : "flex-row"
            } ${className} items-center gap-4 border border-primary rounded-xl`}
        >
            <label
                htmlFor="searchIcon"
                className={`text-3xl ${
                    secondary ? "text-slate-400" : "text-primary"
                } `}
            >
                <IoSearchOutline />
            </label>
            <input
                size={1}
                type="text"
                id="searchIcon"
                name={name}
                placeholder={placeholder}
                className="flex-[1]"
            />
            {includeButton && (
                <button
                    type="submit"
                    className="py-2 px-5 rounded-md bg-primary text-white"
                >
                    Search
                </button>
            )}
        </form>
    )
}
