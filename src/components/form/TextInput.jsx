export default function TextInput({ id, placeholder, className, onChange }) {
    return (
        <input
            type="text"
            size={1}
            onChange={onChange}
            className={`py-2 px-4 rounded-lg ${className}`}
            name={id}
            placeholder={placeholder}
            id={id}
        />
    )
}
