import React from "react";
import classes from './Dialog.module.css'
import MessageItem from "./MessageItem/MessageItem";
import PersonItem from "./PersonItem/PersonItem";

const Dialog = (props) => {
    let dialogsElements = props.dialogsElements.dialogs.map( d => < PersonItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsElements.messages.map( m => <MessageItem message={m.message} />)

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.onAddMessage()
    }

    let updateTextMessage = () => {
        let text = newMessageElement.current.value;
        props.onUpdateTextMessage(text)
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.persons}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea ref={newMessageElement} value={props.dialogsElements.newTextMessage} onChange={updateTextMessage}  />
                <div>
                    <button onClick={addNewMessage} > Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;