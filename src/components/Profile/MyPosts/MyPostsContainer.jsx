import react from "react";
import {addNewPostActionCreator, onPostChangeActionCreator} from './../../../redux/profile-reducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addNewPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }

    let postChange = (newText) => {
        props.store.dispatch(onPostChangeActionCreator(newText))
    }

    return(
        <MyPosts onAddNewPost = {addNewPost} onPostChange = {postChange} newPostText = {state.profilePage.newPostText} posts={state.profilePage.posts}/>
    );
}

export default MyPostsContainer;