import './Logo.css'

function Logo() {
    return <div className="logo">
        {<img className="logo__icon" src="logo-pb.png" />}
        <h1>Predator's Project</h1>
        <h4>Welcome to</h4>
    </div>
}

export default Logo