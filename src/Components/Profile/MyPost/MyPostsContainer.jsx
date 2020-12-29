//import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
        
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => { 
        //     let action = updateNewPostTextActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }   
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts);
export default MyPostsContainer;