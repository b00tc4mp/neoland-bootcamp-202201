import './Home.sass'
import { Search, HeaderBar, MenuBar } from '.'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, Navigate } from 'react-router-dom'


export function Home() {

   
    return <div>
        <HeaderBar />
        <Search />
        <MenuBar />       

       
    </div>


}

