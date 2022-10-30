import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 1}
    ]

    const postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

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

