import react from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={classes.posts}>
            My posts
            <div className={classes.item}>
                <textarea></textarea>
                <button> Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hello, it is my first post!' likes='5'/>
                <Post message='I like pizza!' likes='100'/>
            </div>
        </div>
    );
}

export default MyPosts;