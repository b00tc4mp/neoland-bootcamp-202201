// import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'


function Home({onProfile}) {

    useEffect(() => {
    }, [])

    const goToProfile = event => {
        event.preventDefault()
        onProfile()
    }

    return <div className='home'>
        <nav className='home__header'>
            <a href="" onClick={goToProfile}>Profile</a>
        </nav>
        <h1>Bienvenido a mi tienda</h1>

    </div>
}

export default Home