import { CgClose } from 'react-icons/cg'

export default function CloseButton({ onClick, className }) {
   return (
      <button onClick={onClick} className={className}>
         <CgClose />
      </button>
   )
}
