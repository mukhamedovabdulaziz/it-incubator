import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {

  const postsData = [
    {id: 1, message: "Hello, how r u?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20}
  ];

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
        <Post message={postsData[0].message} likesCount={postsData[0].likes}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likes}/>
      </div>
    </div>
  )
}