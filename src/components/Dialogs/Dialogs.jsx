import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
    
    let state = props.dialogPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <DialogMessage key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => props.sendMessage()
    const onNewMessageChange = (e) =>{
        let body = e.target.value
        props.updateNewMessageBody(body)   
    }

    if(!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs