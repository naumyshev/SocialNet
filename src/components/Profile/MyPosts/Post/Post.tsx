import React from 'react';
import s from "./Post.module.css";
import avatar from '../../../../pic/avatar1.jpg'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="" className={s.avatar}/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>


        </div>
    );
};
