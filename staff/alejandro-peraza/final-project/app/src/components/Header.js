import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


function Header({ onProfile, onHome }) {
    const goToProfile = event => {
        event.preventDefault()
        onProfile()
    }

    const goToHome = event => {
        event.preventDefault()
        onHome()
    }

    return (
        <nav className="header">
            <div className="header__logo" onClick={goToHome}>
            <li onClick={goToProfile}>Profile</li>
                <p>CFD</p>
            </div> 
        </nav>
        )
}

export default Header