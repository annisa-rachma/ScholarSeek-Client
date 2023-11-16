import { Link } from "react-router-dom";

export default function Button({ type, children, className, onClick, to }) {
    if (type === 'link') return (
        <Link className={`py-2 px-6 md:py-3 md:px-8 rounded-lg md:rounded-xl text-center text-sm md:text-lg font-semibold md:font-bold ${className}`} to={to}>
            {children}
        </Link>
    )

    return (
        <button
            type={type}
            className={`py-2 px-6 md:py-3 md:px-8 rounded-lg md:rounded-xl text-center text-sm md:text-lg font-semibold md:font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
