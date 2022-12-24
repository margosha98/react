
import React from "react";
import  axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
export function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  } 

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
             //this.props.setUsersCount(response.data.totalCount)
         })

    }

    render() {
        return <Profile {...this.props}/>
    }
   
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

let withUrlData =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (withUrlData);