import React from "react";
import classes from './../Dialog.module.css'

const MessageItem = (props) => {
    return(
        <div className={classes.message}>
            <img className={classes.avatar} src='https://cdn-icons-png.flaticon.com/512/147/147133.png' />
        <span>{props.message}</span>
        </div>
    )
}

export default MessageItem;