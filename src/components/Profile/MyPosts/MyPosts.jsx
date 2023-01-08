import react from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requared } from "../../../utils/validators/validator";
import { Textarea } from "../../public/Preloader/FormsControls/Formcontrol";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let onAddNewPos = (values) => {
        console.log(values.postText)
        props.addNewPost(values.postText)
    }

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)
    return(
        <div className={classes.posts}>
            <h2>My posts </h2>
            <div className={classes.item}>
                <AddNewPostFormRedux  onSubmit={onAddNewPos}/>
            </div>
            
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}

const maxLength30 = maxLengthCreator(6)
const NewPost = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        
                <Field validate={[requared,maxLength30]} component={Textarea} placeholder={props.newPostText} name='postText'/>
                <div>
                    <button> Add post</button>
                </div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: 'newPostForm',                          
  })(NewPost);



export default MyPosts;
