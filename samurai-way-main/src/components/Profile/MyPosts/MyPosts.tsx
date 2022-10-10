import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {

  type postDataType = {
    id: number
    message: string
    likes: number
  }

  const posts: Array<postDataType> = [
    {id: 1, message: "Hello, how r u?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20}
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likes}/>
  )

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
        {postsElements}
      </div>
    </div>
  )
}