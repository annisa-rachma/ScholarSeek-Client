import { IoSearchOutline } from "react-icons/io5"

export default function SearchInput({
    placeholder,
    includeButton,
    reverse,
    secondary,
    id,
    onChange,
}) {
    return (
        <div
            className={`py-2 pl-4 pr-2 flex flex-[1]  ${
                reverse ? "flex-row-reverse" : "flex-row"
            } items-center gap-4 border border-primary rounded-xl`}
        >
            <label
                htmlFor={id}
                className={`text-3xl ${
                    secondary ? "text-slate-400" : "text-primary"
                } `}
            >
                <IoSearchOutline />
            </label>
            <input
                size={1}
                type="text"
                id={id}
                name={id}
                placeholder={placeholder}
                className="flex-[1]"
                onChange={(e) => onChange(e)}
            />
            {includeButton && (
                <button
                    type="submit"
                    className="py-2 px-5 rounded-md bg-primary text-white"
                >
                    Search
                </button>
            )}
        </div>
    )
}
