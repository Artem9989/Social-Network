// import React, {Component} from 'react';
import React from 'react';
import Post from './Posts/Post.jsx';
import MyPostsCSS from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../redux/utils/validators/Validators';
import {Textarea} from '../../Common/FormsControls/FormsControls'

const MyPosts = React.memo(props => {

    
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    //   }
    let postElements = [...props.posts]
    .reverse()
    .map(post => <Post id={post.id} message={post.postMessage} countLike={post.likeCount} key={post.id} />)

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (<div className={MyPostsCSS.postsBlock}>
        <h3> Мои посты </h3>
        <AddPostFormRedux onSubmit={onAddPost} />
        <div className={MyPostsCSS.content}>
            {postElements}
        </div>
    </div>
    );
});

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);
const addNewPostForm = (props) => {
    return (
  
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={"newPostText"} className={MyPostsCSS.TextArea} Placeholder='Сообщение поста'
                validate={[required, maxLength10, minLength2]} /> </div>
            <div> <button>Создать пост </button> </div>
            <div> <button>Удалить пост </button> </div>
        </form>
    )
}


const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(addNewPostForm);

export default MyPosts;

// const addNewPostForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div><Field component={Textarea} name={"newPostText"} className={MyPostsCSS.TextArea} Placeholder='Сообщение поста'
//                 validate={[required, maxLength10, minLength2]} /> </div>
//             <div> <button>Создать пост </button> </div>
//             <div> <button>Удалить пост </button> </div>
//         </form>
//     )
// }


// const maxLength10 = maxLengthCreator(10);
// const minLength2 = minLengthCreator(2);



// const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(addNewPostForm);

// class MyPosts extends Component {

    
//      shouldComponentUpdate(nextProps, nextState) {
//          return nextProps !== this.props || nextState !== this.state;
//        }
//     render () {
//         console.log('rerender');
//     let postElements = this.props.posts.map(post => <Post id={post.id} message={post.postMessage} countLike={post.likeCount} key={post.id} />)

//     // let newPostElement = React.createRef();

//     let onAddPost = (values) => {
//         this.props.addPost(values.newPostText);
//     }

//     // let onPostChange = () => {
//     //     let text = newPostElement.current.value;
//     //     props.updateNewPostText(text);
//     // }

//     return (<div className={MyPostsCSS.postsBlock}>
//         <h3> Мои посты </h3>
//         <AddPostFormRedux onSubmit={onAddPost} />
//         <div className={MyPostsCSS.content}>
//             {postElements}
//         </div>
//     </div>
//     );
// }
// }



// export default MyPosts;





