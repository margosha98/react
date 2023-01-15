import { NavLink } from "react-router-dom"
import classes from './Users.module.css';
import userPhoto from '../../assests/img/user.png'


let User = (props) => {
    let userId = props.user.id

    return (
        <div key={userId}>
                <div> 
                    
                    <NavLink to={'/profile/' + userId }>
                        <img className={classes.photo} src={props.user.photos.small === null ? userPhoto :  props.user.photos.small} />
                    </NavLink>
                    <div>
                        { props.user.followed
                        ? <button disabled = {props.isToggleButton.some( id => id===userId)} 
                        onClick={ () => {
                            props.toUnfollowThunk(userId)
                        }
                        }>Unfollow </button>
                        : <button disabled = {props.isToggleButton.some( id => id===userId)} 
                         onClick={ () => {
                            props.toFollowThunk(userId)
                        }

                        }>Follow </button>}
                    </div>
                </div>
                <div>
                    <p>{props.user.name}</p>
                    <p>{props.user.status}</p>
                    <p>{"u.location.country"}</p>
                    <p>{'u.location.city'}</p>
                </div>
            </div>
    )
}


export default User;