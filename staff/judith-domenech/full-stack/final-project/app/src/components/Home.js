import './Home.sass'
import { retrieveUser } from '../logic'
import { Profile, UpdatePassword, DeleteAccount, Search } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, Navigate } from 'react-router-dom'

function Home() {

// setamos la constante al metdodo?? use navigate qu enos facilta la navegacion entre vista similar al setView
    const navigate = useNavigate()

// cancelo el evento del link y le paso una función esta función setea la vista 
    const goToRegister = event => {
        event.preventDefault()
        showRegister()
    }
//  creo una constante y la seteo a la view que quiero
    const showRegister = () => navigate('register')

    const goToLogin = event => {
        event.preventDefault()
        showLogin()
    }
    const showLogin = () => navigate('login')

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    const showProfile = () => navigate('profile')

    const goToFavorites = event => {
        event.preventDefault()
        showFavorites()
    }

    const showUpdatePassword = () => navigate('profile/update-password')
    const showDeleteAccount = () => navigate('profile/delete-account')
   
    const showFavorites = () => navigate('favorites')

    const goToSearchUserRacket = event => {
        event.preventDefault()
        showGoToSearchUserRacket()
    }

    const showGoToSearchUserRacket = () => navigate('searchYourRacket')


    return <div className="home">
        <nav className="home__header" >
            <a className="" href="" onClick={goToRegister}>Register</a>
            <a className="" href="" onClick={goToLogin}>Login</a>
        </nav>
    <div className='search'>
        <Search></Search>
    </div>
        <nav className="home__feed">
            <a href="" onClick={goToProfile}>Profile </a>
            <a href="" onClick={goToFavorites}> Favoritos</a>
            <a href="" onClick={goToSearchUserRacket}> Tu Pala</a>
        </nav>

<Routes>    
            <Route path='profile' element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path='profile/update-password' element={<UpdatePassword onBack={showProfile} />} />
            <Route path='profile/delete-account' element={<DeleteAccount onBack={showProfile} /* onDeletedAccount={onLogOut} onLogout={onLogOut} */ />} />

</Routes>
    </div>
}

export default Home
/* 
        <Routes>
            <Route index element={<Search onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path='search' element={<Search onItem={goToDetails} onQuery={doSearch} query={query} />} /> 
            <Route path='profile' element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path='profile/update-password' element={<UpdatePassword onBack={showProfile} />} />
            <Route path='profile/delete-account' element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut} onLogout={onLogOut} />} />
        </Routes>
     */