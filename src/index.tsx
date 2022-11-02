import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";

const posts: Array<PostPropsType> = [
    {id: 1, message: 'Hi! How are you?', likesCount: 12},
    {id: 2, message: 'My first post', likesCount: 1}
]

const dialogs: Array<DialogItemPropsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

const messages: Array<MessagePropsType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
]

export type AppPropsType = {
    posts: Array<PostPropsType>
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);