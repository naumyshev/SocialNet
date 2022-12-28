import {
    ProfilePageType,
    RootStateType
    } from "./state";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogActionType} from "./dialogs-reducer";

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ProfileActionType = AddPostActionType | UpdateNewPostTextActionType

export const profileReducer = (state: ProfilePageType, action: DialogActionType | ProfileActionType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: 5, message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'})

export const updateNewPostAC = (text: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
})

