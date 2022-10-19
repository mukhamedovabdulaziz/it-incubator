import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// type postDataType = {
//   id: number
//   message: string
//   likes: number
// }
//
// type dialogsDataType = {
//   id: number
//   name: string
// }
//
// type messagesDataType = {
//   id: number
//   message: string
// }
//
// const posts: Array<postDataType> = [
//   {id: 1, message: "Hello, how r u?", likes: 15},
//   {id: 2, message: "It's my first post", likes: 20}
// ];
//
// const dialogs: Array<dialogsDataType> = [
//   {id: 1, name: "Nazim"},
//   {id: 2, name: "Bekzhan"},
//   {id: 3, name: "Timur"},
//   {id: 4, name: "Aldiyar"},
//   {id: 5, name: "Ali"},
//   {id: 6, name: "Arystan"}
// ];
//
// const messages: Array<messagesDataType> = [
//   {id: 1, message: "Hi"},
//   {id: 2, message: "How r u?"},
//   {id: 3, message: "Yo"},
// ];

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);