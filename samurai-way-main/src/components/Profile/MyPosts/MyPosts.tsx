import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postDataType} from "../../../redux/state";

type postsType = {
  posts: Array<postDataType>
}

export const MyPosts = (props: postsType) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likes}/>)

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