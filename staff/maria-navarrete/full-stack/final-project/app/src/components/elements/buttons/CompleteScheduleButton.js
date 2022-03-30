import './CompleteScheduleButton.sass'
import { useState } from 'react'
import { updateSchedule } from '../../../logic'
import { CalendarCheckIcon } from '../../icons'
import { Button } from '.'

export const CompleteScheduleButton = ({ className = '', schedule = {}, onCompleted }) => {

    const complete = async () => {
        try {
            await updateSchedule(sessionStorage.token, schedule.id)
            onCompleted && onCompleted()
        } catch (error) {
            alert(error.message)
        }
    }

    const onComplete = event => {
        event.preventDefault()
        complete()
    }

    return <>
        <Button className={className} type="button" onClick={onComplete}>
            <CalendarCheckIcon />
        </Button>
    </>
}

