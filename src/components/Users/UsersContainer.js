import React from "react";
import { connect } from "react-redux";
import { getCurrenttPage, getIsLoading, getIsToggle, getPageSize, getTotalUsers, getUsersPage } from "../../redux/user-selector";
import { setCurrentPage, getUsersThunk , toUnfollowThunk, toFollowThunk} from "../../redux/users-reducer";
import Preloader from "../public/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize,this.props.currentPage )
    }
 
    onSetCurrentPage = (p) => {
         this.props.setCurrentPage(p);
         this.props.getUsersThunk(this.props.pageSize, p)
    }
 
     render() {
        return <>
            { this.props.isLoading? <Preloader /> : null}
            <Users 
            onSetCurrentPage = {this.onSetCurrentPage}
            usersPage = {this.props.usersPage}
            currentPage = {this.props.currentPage}
            totalUsers = {this.props.totalUsers}
            pageSize = {this.props.pageSize}
            isToggleButton = {this.props.isToggle}
            toUnfollowThunk = {this.props.toUnfollowThunk}
            toFollowThunk = {this.props.toFollowThunk}

            />
        </>
     }
 }

let addStateToProps = (state) => {
    return {
        usersPage: getUsersPage(state),
        currentPage: getCurrenttPage(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        isToggle: getIsToggle(state)
    }
}


export default connect(addStateToProps,
    {
        setCurrentPage,
        getUsersThunk,
        toUnfollowThunk,
        toFollowThunk
        }) (UsersContainer);
