import react from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={classes.profileInfo}>
            <div>
                <img className={classes.img} src ='https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'/>
            </div>
            <div className={classes.item}>
                Avatar + discription
            </div>
        </div>
    );
}

export default ProfileInfo;