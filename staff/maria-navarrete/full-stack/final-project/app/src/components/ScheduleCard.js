import './ScheduleCard.sass'
import { CancelScheduleButton, CompleteScheduleButton, StopwatchIcon, MoneyIcon, RepeatIcon, CalendarIcon } from '.'
import { useState } from 'react'

export const ScheduleCard = ({ schedule = {}, onUpdated }) => {


    return <div className='scheduleCard'>
        <h3 className='scheduleCard__description'>{schedule.actionDescription}</h3>
        <div className='scheduleCard__info'><StopwatchIcon className='scheduleCard__icon' />{schedule.actionRequiredTime} minutos</div>
        <div className='scheduleCard__info'><MoneyIcon className='scheduleCard__icon' />{schedule.actionRequiredBudget} €</div>
        <div className='scheduleCard__info'>
            <CalendarIcon className='scheduleCard__icon' /> {new Date(schedule.date).toLocaleString()}
            <div className='schedulaCard__complete'><CompleteScheduleButton className='scheduleCard__button' onCompleted={onUpdated} schedule={schedule} /> Marcar <br/> completada</div>
        </div>
        <div className='scheduleCard__info'><RepeatIcon className='scheduleCard__icon' /> Repetición: {schedule.repeat} <CancelScheduleButton className='scheduleCard__button' onCanceled={onUpdated} /></div>
        <div className='scheduleCard__info scheduleCard__completed'>{schedule.completed.length} cumplidas</div>
    </div>
}