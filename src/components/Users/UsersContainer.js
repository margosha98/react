import React from "react";
import { connect } from "react-redux";
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
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        isToggle: state.usersPage.isToggle
    }
}


export default connect(addStateToProps,
    {
        setCurrentPage,
        getUsersThunk,
        toUnfollowThunk,
        toFollowThunk
        }) (UsersContainer);
