import React from 'react';
import lake from '../pic/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'

export const Profile = () => {
    return (
        <div className='content'>
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
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

        </div>
    );
};

