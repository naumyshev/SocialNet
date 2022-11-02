import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";

export type ProfilePageType = {
    posts: Array<PostPropsType>
}

export type DialogPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message: 'My first post', likesCount: 1}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'},
        ]
    }
}