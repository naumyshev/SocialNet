import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogPageType, sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
    dispatch: (action: ActionType) => void
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageBody = props.store._state.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Enter your message'}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
