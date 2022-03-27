import './ScheduleCard.sass'
import { CancelScheduleButton, CompleteScheduleButton } from '.'
import { useState } from 'react'

export const ScheduleCard = ({ schedule = {} }) => {


    return <>
        <div >
            <h3>{schedule.actionDescription}</h3>
            <p>Tiempo requerido: {schedule.actionRequiredTime} min</p>
            <p>Dinero requerido: {schedule.actionRequiredBudget} €</p>
            <p>Repetición: {schedule.repeat}</p>
            <CancelScheduleButton />
            <p>Fecha: {new Date(schedule.date).toLocaleString()}</p>
            <CompleteScheduleButton schedule={schedule} />
            <p>{schedule.completed.length} cumplidas</p>
        </div>
    </>
}