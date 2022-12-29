// import react from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../public/Preloader/Preloader";

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    return(
        <div className={classes.content}>
            <ProfileInfo {...props.userProfile}/>
            <MyPostsContainer store = {props.store}/>
        </div>
    );
}

export default Profile;