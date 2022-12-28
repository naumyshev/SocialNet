import {DialogPageType} from "./state";
import {ProfileActionType} from "./profile-reducer";

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type DialogActionType = UpdateNewMessageBodyActionType | SendMessageActionType

export const dialogsReducer = (state: DialogPageType, action: DialogActionType | ProfileActionType): DialogPageType => {

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