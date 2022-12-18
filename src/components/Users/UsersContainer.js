import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { toFollow, toUnfollow, setUsers, setCurrentPage, setUsersCount, isFetchLoading } from "../../redux/users-reducer";
import Preloader from "../public/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchLoading(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.isFetchLoading(false)
            this.props.setUsers(response.data.items);
             //this.props.setUsersCount(response.data.totalCount)
         })

    }
 
    onSetCurrentPage = (p) => {
         this.props.setCurrentPage(p);
         this.props.isFetchLoading(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
            this.props.isFetchLoading(false)   
            //this.props.setUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items);

         })
    }
 
     render() {
        return <>
            { this.props.isLoading? <Preloader /> : null}
            <Users 
            toFollow = {this.props.toFollow}
            toUnfollow = {this.props.toUnfollow}
            onSetCurrentPage = {this.onSetCurrentPage}
    
            usersPage = {this.props.usersPage}
            currentPage = {this.props.currentPage}
            totalUsers = {this.props.totalUsers}
            pageSize = {this.props.pageSize}
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
        isLoading: state.usersPage.isLoading
    }
}


export default connect(addStateToProps,
    {   toFollow,
        toUnfollow,
        setUsers,
        setCurrentPage,
        setUsersCount,
        isFetchLoading
        }) (UsersContainer);