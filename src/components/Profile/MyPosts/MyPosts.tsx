import React from 'react';
import s from "./MyPosts.module.css";
import {Post, PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div>
                { postsElements }
            </div>
        </div>
    );
};

