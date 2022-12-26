import React from "react";
import { connect } from "react-redux";
import {addNewMessageCreator, updateTextMessageCreator} from './../../redux/dialogs-reducer'
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addNewMessageCreator())
        },
        onUpdateTextMessage: (text) => {
            dispatch(updateTextMessageCreator(text))
        }
    }
}

const DialogContainer = connect(mapStateToProps,mapDispachToProps) (Dialog);

export default DialogContainer;