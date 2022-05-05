import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogMessage.module.css";


const DialogMessage = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default DialogMessage