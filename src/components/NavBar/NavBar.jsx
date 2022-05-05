import React from "react";
import s from './NavBar.module.css'
import { Outlet, NavLink } from "react-router-dom";
const NavBar = () =>{
    const className = ({isActive}) => isActive ? s.active : ''
    return(
        <nav className={s.nav}>
            <div className={s.item}><NavLink className={className} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink className={className} to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><NavLink className={className} to="/news">news</NavLink></div>
            <div className={s.item}><NavLink className={className} to="/users">users</NavLink></div>
            <div className={s.item}><NavLink className={className} to="/music">music</NavLink></div>
            <div className={s.item}><NavLink className={className} to="/settings">settings</NavLink></div>
        </nav>
    )
}



export default NavBar