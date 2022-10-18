import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type postDataType = {
  id: number
  message: string
  likes: number
}

type postsType = {
  posts: Array<postDataType>
}

export const Profile = (props: postsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}