import React from 'react';
import s from "./MyPosts.module.css";
import {Post, PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            debugger
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    );
};

