export default function Button({ type, children, className, onClick }) {
    return (
        <button
            type={type}
            className={`py-2 px-6 rounded-xl text-center text-sm md:text-lg font-semibold md:font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
