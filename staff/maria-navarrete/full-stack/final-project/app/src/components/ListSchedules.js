import './ListSchedules.sass'
import { useState, useEffect } from 'react'
import { listSchedules } from '../logic'
import { ScheduleCard } from '.'

export const ListSchedules = () => {

    const [schedules, setSchedules] = useState([])

    useEffect(async () => {
        try {
            const schedules = await listSchedules(sessionStorage.token)
            setSchedules(schedules)
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <>
        <div>
            {!!schedules.length &&
                <ul> {schedules.map(schedule =>
                    <li key={schedule.id}>
                        <ScheduleCard schedule={schedule} />
                    </li>
                )}
                </ul>}
        </div>
    </>

}