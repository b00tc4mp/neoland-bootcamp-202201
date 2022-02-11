import './App.css';

import { useState } from 'react'

import Register from './components/Register'
import Landing from './components/Landing'


function App() {

	const [view, setView] = useState('landing')


	const showLogin = () => setView('login')
	const showRegister = () => setView('register')


	return <div className="app">
		{view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister}/>}
		{view === 'login' && <h1>Hello login</h1>}
		{view === 'register' && <Register onLogin={showLogin}/>}
		{view === 'home' && <h1>Hello home</h1>}
	</div>

}


export default App