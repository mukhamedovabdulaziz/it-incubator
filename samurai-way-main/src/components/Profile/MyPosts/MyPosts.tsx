import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hello, how r u?" likesCount={15}/>
        <Post message="It's my first post" likesCount={20}/>
      </div>
    </div>
  )
}