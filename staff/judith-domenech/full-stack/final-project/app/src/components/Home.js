import './Home.sass'
import { retrieveUser } from '../logic'
import { Profile, UpdatePassword, DeleteAccount, Register, Search } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, Navigate } from 'react-router-dom'
import logo from '../assets/racketMatch.png'
import { HeaderBar } from './HeaderBar'
import { MenuBar } from './MenuBar'

export function Home() {
    const [query, setQuery] = useState('')
   
   return <div>
       <HeaderBar />
       <Search />
       <MenuBar />

    </div>
}


/*     const [search, setSearch] = useSearchParams()
    const q = search.get('q')
    const [query, setQuery] = useState(q)
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

    const doSearch = query => {
        setQuery(query)

        navigate(`search?q=${query}`)
    }

    const goToSearchUserRacket = event => {
        event.preventDefault()
        showGoToSearchUserRacket()
    }

    const showGoToSearchUserRacket = () => navigate('searchYourRacket')
     */