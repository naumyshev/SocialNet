import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>

            <div className='posts'>
                <Post message='Hi! How are you?' likesCount={21} />
                <Post message='My first post' likesCount={3}/>


            </div>
        </div>
    );
};

