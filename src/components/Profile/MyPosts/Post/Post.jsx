import react from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img className={classes.icon} src='https://cdn-icons-png.flaticon.com/512/4288/4288960.png'/>
            {props.message}    <img className={classes.like} src='https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-47.png' />   {props.likes}
        </div>
    );
}

export default Post;