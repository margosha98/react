import react from "react";
import { connect } from "react-redux";
import {addNewPostActionCreator, onPostChangeActionCreator} from './../../../redux/profile-reducer'
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        onPostChange: (newText) => {
            dispatch(onPostChangeActionCreator(newText))
        },
        onAddNewPost: () => {
            dispatch(addNewPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispachToProps)(MyPosts)

export default MyPostsContainer;