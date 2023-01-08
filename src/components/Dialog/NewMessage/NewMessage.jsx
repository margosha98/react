import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requared } from "../../../utils/validators/validator";
import { Textarea } from "../../public/Preloader/FormsControls/Formcontrol";
const maxLength10 = maxLengthCreator(10)
const NewMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Write a message"} component={Textarea} validate={[requared,maxLength10]} name={'newMessage'}/>
            </div>
            <div>
                <button onSubmit={props.onSubmit}>Post message</button>
            </div>
            
        </form>
    )
}

export default reduxForm({
    form: 'newMessageForm',                          
  })(NewMessage);
