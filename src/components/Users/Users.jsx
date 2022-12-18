import axios from "axios";
import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assests/img/user.png'


class Users extends React.Component {
   componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setUsersCount(response.data.totalCount)
        })
   }

   onSetCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
            this.props.setUsers(response.data.items);
        })
   }

    render() {

    let pageValue = Math.ceil(this.props.totalUsers / this.props.pageSize)
    let pages = [];

    for (let i=1; i<=pageValue; i++ ) {
        pages.push(i)
    }

    return <div>
        <div>
            { pages.map( (page => {
                return <span
                className={page===this.props.currentPage ? classes.selectedPage : '' }
                onClick = { (e) => {this.onSetCurrentPage(page);}}
                >{page}</span>
               }))
            }
        </div>
        {
            this.props.usersPage.users.map(u => <div key={u.id}>
                <div> 
                    <img className={classes.photo} src={u.photos.small ==! null ? u.photos.small : userPhoto} />
                    <div>
                        { u.followed
                        ? <button onClick={ () => {this.props.toUnfollow(u.id)}}>Unfollow </button>
                        : <button onClick={ () => {this.props.toFollow(u.id)}}>Follow </button>}
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
}
      
export default Users;