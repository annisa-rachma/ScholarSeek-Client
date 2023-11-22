export default function IconWithNum({ icon, num, className, onClick }) {
    if (onClick) {
        return (
            <button
                onClick={onClick}
                className={`flex gap-2 items-center ${className}`}
            >
                {icon}
                <p className="font-light text-[16px]">{num}</p>
            </button>
        )
    }

    return (
        <div className={`flex gap-2 items-center ${className}`}>
            {icon}
            <p className="font-light text-[16px]">{num}</p>
        </div>
    )
}
