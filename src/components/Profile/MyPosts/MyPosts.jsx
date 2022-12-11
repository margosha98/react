import react from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let onAddNewPost = () => {
        props.onAddNewPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.onPostChange(newText)
    }

    let newPostElement = react.createRef();

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)
    return(
        <div className={classes.posts}>
            <h2>My posts </h2>
            <div className={classes.item}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddNewPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;