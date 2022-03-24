import { useState } from 'react'
import { Modal, Button, xMarkIcon } from '../../'
import { cancelSchedule } from '../../../logic'


export const CancelScheduleButton = ({ scheduleId }) => {
    const [showModal, setShowModal] = useState(false)

    const cancelSched = async () => {
        await cancelSchedule(sessionStorage.token, scheduleId)
        setShowModal(false)
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
        <Button onClick={showCancelModal}></Button>
        {showModal && <Modal text='' success={cancelSched} closeModal={closeCancelModal} />}
    </>
}
