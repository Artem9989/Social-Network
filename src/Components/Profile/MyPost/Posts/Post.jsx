import React from 'react';
import PostCSS from './Post.module.css';

const Post = (props ) => {

    return (<div className={PostCSS.item}>
        <img src="https://yt3.ggpht.com/a/AGF-l7_o6_rkFsRRlwewGkw_MjHBHEFNGK-1vZl7MQ=s400-c-k-c0xffffffff-no-rj-mo" alt="no avatar" />
            {props.message}
        <div>
    <span className = {PostCSS.like}> Лайк </span>
    <span className = {PostCSS.countLike}> {props.countLike} </span>
            <span>Комменты </span>
        </div>
    </div>
    );
}
export default Post;