export default function Banner({ children, color, className }) {
    return (
        <div className={`p-12 ${color} md:rounded-xl md:mx-6 ${className}`}>{children}</div>
    )
}
