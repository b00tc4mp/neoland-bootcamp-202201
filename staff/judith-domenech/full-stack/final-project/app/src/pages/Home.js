import './Home.sass'
import { Search, HeaderBar, NavigateMenu } from '../components'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, Navigate } from 'react-router-dom'


export function Home() {
    return <div className='home'>
        
        <div className='home__search'>
            <Search />
        </div>
        
    </div>


}
