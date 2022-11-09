import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";

type postsType = {
  posts: Array<postDataType>
  addPost: (addPost:string) => void;
}

function Profile(props: postsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;