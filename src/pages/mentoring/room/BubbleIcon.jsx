export default function BubbleIcon({ className, icon, onClick }) {
   return (
      <button
         onClick={onClick}
         className={`bg-gray-700 text-white text-4xl p-2 rounded-full ${className}`}
      >
         {icon}
      </button>
   )
}
