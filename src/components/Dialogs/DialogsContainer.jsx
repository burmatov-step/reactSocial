import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps =(state) =>{
    return  {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps =(dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer