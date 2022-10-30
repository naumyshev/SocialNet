import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postsDada = [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 1}
    ]

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
                <Post message={postsDada[0].message} likesCount={postsDada[0].likesCount} />
                <Post message={postsDada[1].message} likesCount={postsDada[1].likesCount} />
            </div>
        </div>
    );
};

