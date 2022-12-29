// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {addNewMessageCreator, updateTextMessageCreator} from './../../redux/dialogs-reducer'
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogPage,
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

export default compose(
    connect(mapStateToProps,mapDispachToProps),
    withAuthRedirect
)(Dialog)