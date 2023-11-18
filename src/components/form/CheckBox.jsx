export default function CheckBox({id, value, label, onChange }) {
    return (
        <div className="flex items-center">
            <input
                onChange={(e) => onChange(e)}
                id={value}
                type="checkbox"
                value={value}
                name={id}
                className="w-4 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor={value} className="ms-2 text-sm text-primary font-light p-1">
                {label}
            </label>
        </div>
    )
}
