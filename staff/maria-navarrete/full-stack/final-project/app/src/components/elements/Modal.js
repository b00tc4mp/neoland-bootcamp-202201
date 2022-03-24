import './Modal.sass'
import { Button, CheckIcon, XIcon } from '../../components'

export const Modal = ({ text, success, closeModal }) => {


    const onOutsideClick = event => {
        closeModal && closeModal()
    }

    const onSuccess = event => {
        event.stopPropagation()
        success && success(event)
    }

    const onClose = event => {
        event.stopPropagation()
        closeModal && closeModal()
    }

    return <div className='modal-outside' onClick={onOutsideClick}>
        <div className='modal-card' onClick={event => event.stopPropagation()}>
            <p>{text}</p>
            <div>
                <Button onClick={onSuccess}> <CheckIcon /> </Button>
                <Button onClick={onClose}><XIcon /></Button>
            </div>
        </div>
    </div>

}