import {DialogPageType} from "./store";
import {ProfileActionType} from "./profile-reducer";

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type DialogActionType = UpdateNewMessageBodyActionType | SendMessageActionType

const initialState = {
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

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogActionType | ProfileActionType): DialogPageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: "SEND-MESSAGE"})

export const updateNewMessageBodyAC = (text: string): UpdateNewMessageBodyActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: text
})