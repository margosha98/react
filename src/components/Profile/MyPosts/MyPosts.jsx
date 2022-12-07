import react from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostActionCreator, onPostChangeActionCreator} from './../../../redux/profile-reducer'

const MyPosts = (props) => {

    let addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(newText))
    }


    let newPostElement = react.createRef();

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)
    return(
        <div className={classes.posts}>
            <h2>My posts </h2>
            <div className={classes.item}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addNewPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;