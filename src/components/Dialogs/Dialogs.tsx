import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    const messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
};
