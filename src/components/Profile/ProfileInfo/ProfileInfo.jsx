import react from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={classes.profileInfo}>
            <div>
                <h2>{props.fullName}</h2>
                <img className={classes.img} src ={props.photos.large}/>
            </div>
            <div className={classes.item}>
                {props.aboutMe}
            </div>
            <div> 
                { props.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>}
            </div>
            <p> status: {props.lookingForAJobDescription}</p>
        </div>
    );
}

export default ProfileInfo;