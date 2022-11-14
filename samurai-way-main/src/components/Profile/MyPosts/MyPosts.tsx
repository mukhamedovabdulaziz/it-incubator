import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";

type postsType = {
  posts: Array<postDataType>
  addPost: (postMessage:string) => void;
}

function MyPosts(props: postsType) {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likes}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addNewPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value);
      newPostElement.current.value = "";
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;