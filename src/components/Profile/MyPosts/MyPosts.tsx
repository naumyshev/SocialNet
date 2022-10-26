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
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    );
};

