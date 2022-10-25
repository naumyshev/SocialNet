import React from 'react';
import lake from '../pic/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={lake} alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div className='posts'>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>

        </div>
    );
};

