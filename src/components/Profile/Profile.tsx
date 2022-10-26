import React from 'react';
import lake from '../../pic/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={lake} alt=""/>
            </div>
            <div>
                ava + description
            </div>

            <MyPosts />

        </div>
    );
};

