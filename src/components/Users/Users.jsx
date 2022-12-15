import axios from "axios";
import react from "react";
import classes from './Users.module.css';
import userPhoto from '../../assests/img/user.png'
const Users = (props) => {
    
    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
}

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <div> 
                    <img className={classes.photo} src={u.photos.small ==! null ? u.photos.small : userPhoto} />
                    <div>
                        { u.followed
                        ? <button onClick={ () => {props.toUnfollow(u.id)}}>Unfollow </button>
                        : <button onClick={ () => {props.toFollow(u.id)}}>Follow </button>}
                    </div>
                </div>
                <div>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                    <p>{"u.location.country"}</p>
                    <p>{'u.location.city'}</p>
                </div>
            </div>
            )
        }
    </div>
}
      
export default Users;