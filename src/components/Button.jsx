export default function Button({ type, children, className, onClick }) {
    return (
        <button type={type} className={`${className ? className : 'p-2'}`} onClick={onClick}>
            {children}
        </button>
    )
}
