import PageContainer from '../../../components/PageContainer'
import ParticipantsSideBar from './ParticipantsSideBar'
import StreamActions from './StreamActions'
import participantsMock from '../../../data/participantsMock.json'
import chatsMock from '../../../data/chatsMock.json'
import { useLayoutEffect, useRef, useState } from 'react'
import ChatsSideBar from './ChatsSideBar'
import useWindowSize from '../../../hooks/useWindowSize'

export default function MentoringRoomPage() {
   const ref = useRef(null)
   const {height} = useWindowSize()
   const [pageHeight, setPageHeight] = useState(0)

   useLayoutEffect(() => {
      setPageHeight(ref.current.offsetHeight)
   }, [height])

   return (
      <div ref={ref}>
         <PageContainer noPadding className="min-h-[80vh] relative flex">
            <ParticipantsSideBar
               participantsCount={27}
               participants={participantsMock}
               pageHeight={pageHeight}
            />
            <div className='flex-[1] relative z-[1] bg-gray-800'>
               <StreamActions />

            </div>
            <ChatsSideBar
               chats={chatsMock}
               pageHeight={pageHeight}
            />
         </PageContainer>
      </div>
   )
}
