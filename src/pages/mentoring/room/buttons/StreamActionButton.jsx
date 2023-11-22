
export default function StreamActionButton({ activeIcon, inactiveIcon, onClick, isActive }) {
   return (
      <button
         className={`py-2 px-4 rounded-xl text-2xl text-white ${
            isActive ? 'bg-primary' : 'bg-gray-400'
         }`}
         onClick={onClick}
      >
         {activeIcon ? (isActive ? activeIcon : inactiveIcon) : inactiveIcon}
      </button>
      
   )
}

