import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: 'My first post', likesCount: 1},
                {id: 3, message: 'Yo!', likesCount: 1},
                {id: 4, message: 'Yo! Yo!', likesCount: 1}
            ],
            newPostText: ''
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
            ],
            newMessageBody: ''
        }
    },

    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {

    },


    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {

        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'})

export const updateNewPostAC = (text: string): UpdateNewPostTextActionType => ({type: "UPDATE-NEW-POST-TEXT", newText: text})

export const sendMessageAC = (): SendMessageActionType => ({type: "SEND-MESSAGE"})

export const updateNewMessageBodyAC = (text: string): UpdateNewMessageBodyActionType => ({type: "UPDATE-NEW-MESSAGE-BODY", body: text})

