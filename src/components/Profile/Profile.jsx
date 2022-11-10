import react from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
            <img src ='https://oir.mobi/uploads/posts/2019-12/1576101448_1-2.jpg'/>
            </div>
            <div className={classes.item}>
            Avatar + discription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;