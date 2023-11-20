import { useState } from 'react'

export default function StreamActionButton({ activeIcon, inactiveIcon }) {
   const [active, setIsActive] = useState(false)
   return (
      <button
         className={`py-2 px-4 rounded-xl text-2xl text-white ${
            active ? 'bg-primary' : 'bg-gray-400'
         }`}
         onClick={() => setIsActive((prev) => !prev)}
      >
         {activeIcon ? (active ? activeIcon : inactiveIcon) : inactiveIcon}
      </button>
   )
}
