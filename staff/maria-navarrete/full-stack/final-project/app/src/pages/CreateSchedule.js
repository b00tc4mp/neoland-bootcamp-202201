import './CreateSchedule.sass'
import { CreateScheduleForm } from '../components'
import { useParams } from 'react-router-dom'

export const CreateSchedule = ({ goBack: _goBack }) => {
    
    const { actionId } = useParams()

    const goBack = event => {
        event.preventDefault()
        _goBack && _goBack(event)
    }

    return <>
        <div>
            <h2>Agendar Acción</h2>
            <CreateScheduleForm actionId={actionId} onCreated={goBack} onCancel={goBack} />
        </div>
    </>
}
