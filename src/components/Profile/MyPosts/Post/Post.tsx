import React from 'react';
import s from "./Post.module.css";
import avatar from '../../../../pic/avatar1.jpg'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="" className={s.avatar}/>
            post 1
            <div>
                <span>Like</span>
            </div>


        </div>
    );
};

