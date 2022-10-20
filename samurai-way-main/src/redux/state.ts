import {rerenderEntireTitle} from "../render";

export type postDataType = {
  id: number
  message: string
  likes: number
}

export type dialogsDataType = {
  id: number
  name: string
}

export type messagesDataType = {
  id: number
  message: string
}

export type stateType = {
  profilePage: {
    posts: Array<postDataType>
  }
  dialogsPage: {
    dialogs: Array<dialogsDataType>,
    messages: Array<messagesDataType>
  }
}

let state: stateType = {
  profilePage: {
    posts: [
      {id: 1, message: "Hello, how r u?", likes: 15},
      {id: 2, message: "It's my first post", likes: 20}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Nazim"},
      {id: 2, name: "Bekzhan"},
      {id: 3, name: "Timur"},
      {id: 4, name: "Aldiyar"},
      {id: 5, name: "Ali"},
      {id: 6, name: "Arystan"}
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How r u?"},
      {id: 3, message: "Yo"},
    ]
  }
}

export let addPost = (postMessage: string) => {
  let newPost: postDataType = {
    id: 5,
    message: postMessage,
    likes: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTitle(state);
}

export default state;