// import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'
import Search from './Search'
import './Home.sass'


function Home() {

    useEffect(() => {
    }, [])


    return <div className='home'>
        <nav className='home__header'>
            <h1>Bienvenido a Dreams Factory</h1>
          
        </nav>

        <Search className='home__search'/>
    </div>


}

export default Home