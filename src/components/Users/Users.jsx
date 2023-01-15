import React from "react";
import Paginator from "./Paginator";
import User from "./User";

let Users = (props) => {

    return <div>
        <Paginator {...props} />
        {
            props.usersPage.users.map(u =>
                <User
                    key={u.id}
                    user={u}
                    isToggleButton={props.isToggleButton}
                    toUnfollowThunk = {props.toUnfollowThunk}
                    toFollowThunk = {props.toFollowThunk}
                />
            )
        }
    </div>
}

export default Users;