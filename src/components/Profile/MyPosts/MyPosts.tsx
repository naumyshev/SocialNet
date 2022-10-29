import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='Hi! How are you?' likesCount={21} />
                <Post message='My first post' likesCount={3}/>


            </div>
        </div>
    );
};

