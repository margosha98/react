import react from "react";
import { connect } from "react-redux";
import {addNewPostActionCreator} from './../../../redux/profile-reducer'
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        addNewPost: (post) => {
            dispatch(addNewPostActionCreator(post))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispachToProps)(MyPosts)

export default MyPostsContainer;