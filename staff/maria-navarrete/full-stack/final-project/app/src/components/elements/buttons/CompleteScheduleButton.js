import './CompleteScheduleButton.sass'
import { useState } from 'react'
import { updateSchedule } from '../../../logic'
import { CalendarCheckIcon } from '../../icons'
import { Button } from '.'

export const CompleteScheduleButton = ({ schedule: _schedule }) => {
    const [schedule, setSchedule] = useState(_schedule)

    const complete = async () => {
        try {
            await updateSchedule(sessionStorage.token, schedule.id)
        } catch (error) {
            alert(error.message)
        }
    }

    const onComplete = event => {
        event.preventDefault()
        complete()
    }

    return <>
        <Button type="button" onClick={onComplete}>
            <CalendarCheckIcon />
        </Button>
    </>
}

