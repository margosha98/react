import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assests/img/user.png'
import { NavLink } from "react-router-dom";

let Users = (props) => {
    window.props = props
    let pageValue = Math.ceil(props.totalUsers / props.pageSize)
    let pages = [];

    for (let i=1; i<=pageValue; i++ ) {
        pages.push(i)
    }

    return <div>
        <div>
            { pages.map( (page => {
                return <span
                className={page===props.currentPage ? classes.selectedPage : '' }
                onClick = { (e) => {props.onSetCurrentPage(page);}}
                >{page}</span>
               }))
            }
        </div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <div> 
                    
                    <NavLink to={'/profile/' + u.id }>
                        <img className={classes.photo} src={u.photos.small ==! null ? u.photos.small : userPhoto} />
                    </NavLink>
                    <div>
                        { u.followed
                        ? <button disabled = {props.isToggleButton.some( id => id===u.id)} 
                        onClick={ () => {
                            props.toUnfollowThunk(u.id)
                            // props.isFetchToogleButton(true,u.id)
                            // userAPI.toUnfollowRequest(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //         props.toUnfollow(u.id)
                            //     }
                            //     props.isFetchToogleButton(false,u.id)
                            
                            // }) 
                        }
                        }>Unfollow </button>
                        : <button disabled = {props.isToggleButton.some( id => id===u.id)} 
                         onClick={ () => {
                            props.toFollowThunk(u.id)
                        //     props.isFetchToogleButton(true,u.id)
                        //     userAPI.toFollowRequest(u.id).then(data => {
                        //     if (data.resultCode === 0) {
                        //         props.toFollow(u.id)
                        //     }
                        //     props.isFetchToogleButton(false,u.id)
                            
                        // })


                        }

                        }>Follow </button>}
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