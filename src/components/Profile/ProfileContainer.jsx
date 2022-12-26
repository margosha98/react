
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfileThunk} from '../../redux/profile-reducer'
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
        this.props.getUserProfileThunk(userId)    
    }
    render() {
        return <Profile {...this.props}/>
    }  
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

let withUrlData =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileThunk}) (withUrlData);