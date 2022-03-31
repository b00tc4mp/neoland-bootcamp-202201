import "./Modal.sass"
import { MdClose } from "react-icons/md"
const Modal = ({onClose, children, className, ...props}) => {
  return (
      <div className='modal__backdrop'>
          <div className={`modal ${className}`}{...props}>
              <MdClose className='modal__close' onClick={onClose}>cierrame</MdClose>
              {children}
              </div>
      </div>
  )
}

export default Modal