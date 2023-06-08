import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {DialogActionType} from "../../redux/dialogs-reducer";
import {ProfileActionType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
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

