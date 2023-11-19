import { FiCamera } from 'react-icons/fi'
import { FiCameraOff } from 'react-icons/fi'

import { IoMicOutline } from 'react-icons/io5'
import { IoMicOffOutline } from 'react-icons/io5'

import { LuScreenShare } from 'react-icons/lu'
import { LuScreenShareOff } from 'react-icons/lu'

import { RiLogoutBoxRLine } from 'react-icons/ri'

import StreamActionButton from './StreamActionButton'
export default function StreamActions({className}) {
   const actions = [
      {
         activeIcon: <FiCamera />,
         inactiveIcon: <FiCameraOff />,
         name: 'camera',
      },
      {
         activeIcon: <IoMicOutline />,
         inactiveIcon: <IoMicOffOutline />,
         name: 'mic',
      },
      {
         activeIcon: <LuScreenShare />,
         inactiveIcon: <LuScreenShareOff />,
         name: 'shareScreen',
      },
      { inactiveIcon: <RiLogoutBoxRLine />, name: 'leave' },
   ]

   return (
      <section className={`flex gap-4 absolute bottom-5 left-[50%] translate-x-[-50%] ${className}`}>
         {actions.map((action) => (
            <StreamActionButton
               key={action.name}
               activeIcon={action.activeIcon}
               inactiveIcon={action.inactiveIcon}
            />
         ))}
      </section>
   )
}
