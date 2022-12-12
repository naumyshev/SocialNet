import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}

            />
        </div>
    );
};

