import './Feedback.css'

function Feedback({ message, level = 'info', version = 'default' }) {
    return <span className={`feedback feedback--${level} feedback--${version}`}>{message}</span>
}

export default Feedback