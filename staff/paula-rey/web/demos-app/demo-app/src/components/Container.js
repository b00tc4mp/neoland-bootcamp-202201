import './Container.css'

function Container({ children, theme }) {
    return <div className={`container container--${theme}`}>{children}</div>
}

export default Container