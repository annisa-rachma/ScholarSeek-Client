export default function TextBubble({ children, className }) {
    return (
        <div className={`${className} py-1 md:py-2  px-4 gird place-content-center rounded-full`}>
            <p className="text-sm md:text-base">{children}</p>
        </div>
    )
}
