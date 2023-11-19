import { PiUsers } from 'react-icons/pi'
import BubbleIcon from './BubbleIcon'
import { useEffect, useState } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import CloseButton from '../../../components/buttons/CloseButton'

export default function ParticipantsSideBar({
   participantsCount,
   participants,
   pageHeight,
}) {
   const BREAKPOINT = 1024
   const [isOpen, setIsOpen] = useState(false)
   const { width } = useWindowSize()

   useEffect(() => {
      if (width > BREAKPOINT) {
         setIsOpen(true)
      } else {
         setIsOpen(false)
      }
   }, [width])

   return (
      <>
         {!isOpen && (
            <BubbleIcon
               onClick={() => setIsOpen(true)}
               icon={<PiUsers />}
               className={`absolute left-5 top-5 z-[2]`}
            />
         )}
         <section
            style={{ height: `${pageHeight}px` }}
            className={`text-white font-semibold max-lg:absolute lg:max-w-[300px] z-[3] left-0 duration-300 ${
               isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
            }`}
         >
            <header className="bg-slate-600 text-lg py-4 px-6 flex items-center gap-7 justify-between">
               {width < BREAKPOINT && (
                  <CloseButton className='text-xl' onClick={() => setIsOpen(false)} />
               )}
               <p>Participants</p>
               <span className="py-1 px-4 rounded-lg bg-gray-700">
                  {participantsCount}
               </span>
            </header>

            <div className="overflow-y-scroll h-full bg-gray-700 text-white">
               {participants.map((participant, i) => (
                  <div key={i} className="py-2 px-4 flex gap-2 items-center">
                     <div className="h-[8px] aspect-square rounded-full bg-green-500" />
                     <p className="">{participant.username}</p>
                  </div>
               ))}
            </div>
         </section>
      </>
   )
}
