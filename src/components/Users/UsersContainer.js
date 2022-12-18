import { connect } from "react-redux";
import { FollowAC, UnfollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";

let addStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: (usersCount) => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
}

const UsersContainer = connect(addStateToProps, addDispatchToProps) (Users)

export default UsersContainer;