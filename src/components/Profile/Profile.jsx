// import react from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../public/Preloader/Preloader";
import ProfileStatusHooks from './ProfileInfo/ProfileStatusHooks';

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    window.props = props

    return(
        <div className={classes.content}>
            <ProfileStatusHooks status={props.userStatus || 'Статус не был установлен'}
                updateUserStatus={props.updateUserStatusThunk} />
            <ProfileInfo {...props.userProfile}/>
            <MyPostsContainer store = {props.store}/>
        </div>
    );
}

export default Profile;

