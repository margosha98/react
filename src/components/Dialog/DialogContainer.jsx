// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {addNewMessageCreator} from './../../redux/dialogs-reducer'
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogPage,
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addNewMessageCreator(message))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispachToProps),
    withAuthRedirect
)(Dialog)