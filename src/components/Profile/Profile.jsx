// import react from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../public/Preloader/Preloader";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    if (!props.isAuth) {return <Navigate to={'/login'} />}

    return(
        <div className={classes.content}>
            <ProfileInfo {...props.userProfile}/>
            <MyPostsContainer store = {props.store}/>
        </div>
    );
}

export default Profile;