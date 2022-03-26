import './Home.sass'
import { Search, HeaderBar, NavigateMenu } from '../components'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, Navigate } from 'react-router-dom'


export function Home({ onLogin, onProfile }) {

    const goToLogin = event => {
        onLogin && onLogin(event)
    }

    const goToProfile = event => {
        onProfile && onProfile(event)
    }


    return <div className='home'>
        <div className='home__header-bar'>
            <HeaderBar onLogin={goToLogin}/>
        </div>
        <div className='home__search'>
            <Search />
        </div>
        <div className='home__navigate-menu'>
            {sessionStorage.token && <NavigateMenu onProfile={goToProfile}/>}
        </div>
    </div>


}
