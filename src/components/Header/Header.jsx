import React from "react";
import s from './Header.module.css'


const Header = () =>{
    return(
        <header className={s.header}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png' />
        </header>
    )
}



export default Header