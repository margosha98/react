import React from "react";
import {addNewMessageCreator, updateTextMessageCreator} from './../../redux/dialogs-reducer'
import Dialog from "./Dialog";

const DialogContainer = (props) => {
    let state = props.store.getState().dialogPage

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageCreator())
    }

    let updateTextMessage = (text) => {
        props.store.dispatch(updateTextMessageCreator(text))
    }

    return(
        <Dialog onAddMessage = {addNewMessage}
                onUpdateTextMessage = {updateTextMessage}
                dialogsElements = {state}
        /> 
    )
}

export default DialogContainer;