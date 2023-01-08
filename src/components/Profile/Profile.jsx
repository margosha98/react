// import react from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../public/Preloader/Preloader";
import ProfileStatus from './ProfileInfo/ProfileStatus';

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    window.props = props

    return(
        <div className={classes.content}>
            <ProfileInfo {...props.userProfile}/>
            <MyPostsContainer store = {props.store}/>
            <ProfileStatus status={props.userStatus}
                updateUserStatus={props.updateUserStatusThunk} />
        </div>
    );
}

export default Profile;