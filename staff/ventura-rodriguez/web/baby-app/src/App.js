import './App.css';

import { useState } from 'react'

import Register from './components/Register'


function App() {

	const [view, setView] = useState('register')


	const showLogin = () => setView('login')


	return <>
		{view === 'landing' && <h1>Hello landing</h1>}
		{view === 'login' && <h1>Hello login</h1>}
		{view === 'register' && <Register onLogin={showLogin}/>}
		{view === 'home' && <h1>Hello home</h1>}
	</>

}


export default App