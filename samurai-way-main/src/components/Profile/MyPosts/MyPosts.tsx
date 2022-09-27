import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello, how r u?" likesCount={15}/>
                <Post message="It's my first post" likesCount={20}/>
            </div>
        </div>
    )
}