import { useState } from 'react'
import { Modal, Button, XMarkIcon } from '../../'
import { cancelSchedule } from '../../../logic'


export const CancelScheduleButton = ({ scheduleId, onCanceled }) => {
    const [showModal, setShowModal] = useState(false)

    const cancelSched = async () => {
        await cancelSchedule(sessionStorage.token, scheduleId)
        setShowModal(false)
        onCanceled && onCanceled()
    }

    const showCancelModal = event => {
        event.preventDefault()
        setShowModal(true)
    }

    const closeCancelModal = event => {
        event.preventDefault()
        setShowModal(false)
    }

    return <>
        <Button onClick={showCancelModal}><XMarkIcon /></Button>
        {showModal && <Modal text='' success={cancelSched} closeModal={closeCancelModal} />}
    </>
}
