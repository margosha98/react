import { connect } from "react-redux";
import { FollowAC, UnfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let addStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let addDispatchToProps = (dispatch) => {
    return {
        toFollow: (id) => {
            dispatch(FollowAC(id))
        },
        toUnfollow: (id) => {
            dispatch(UnfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(addStateToProps, addDispatchToProps) (Users)

export default UsersContainer;