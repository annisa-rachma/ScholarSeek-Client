export default function TextInput({ id, placeholder, className, onChange, type='text', value }) {
    return (
        <input
            type={type}
            value={value}
            size={1}
            onChange={onChange}
            className={`py-2 px-4 rounded-lg ${className}`}
            name={id}
            placeholder={placeholder}
            id={id}
        />
    )
}
