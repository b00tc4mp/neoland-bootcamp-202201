import './CreateSchedule.sass'
import { CreateScheduleForm } from '../components'
import { useParams } from 'react-router-dom'

export const CreateSchedule = ({ goBack }) => {

    const { actionId } = useParams()

    return <>
        <div>
            <h2>Agendar Acción</h2>
            <CreateScheduleForm actionId={actionId} onCreated={goBack} onCancel={goBack} />
        </div>
    </>
}
