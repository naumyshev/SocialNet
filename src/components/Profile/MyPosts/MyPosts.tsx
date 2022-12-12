import React from 'react';
import s from "./MyPosts.module.css";
import {Post, PostType} from "./Post/Post";
import {ActionType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: "ADD-POST"})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post
                </button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    );
};

