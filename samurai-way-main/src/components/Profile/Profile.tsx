import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";

type postsType = {
  posts: Array<postDataType>
  addPost: any //?
}

export const Profile = (props: postsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
  )
}