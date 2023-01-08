import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import classes from './Dialog.module.css'
import MessageItem from "./MessageItem/MessageItem";
import NewMessage from "./NewMessage/NewMessage";
import PersonItem from "./PersonItem/PersonItem";

const Dialog = (props) => {
    let dialogsElements = props.dialogsElements.dialogs.map( d => < PersonItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsElements.messages.map( m => <MessageItem message={m.message} />)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    if (!props.isAuth) {return <Navigate to={'/login'}/>}
    return(
        <div className={classes.dialogs}>
            <div className={classes.persons}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>

            <div>
                <NewMessage onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialog;
