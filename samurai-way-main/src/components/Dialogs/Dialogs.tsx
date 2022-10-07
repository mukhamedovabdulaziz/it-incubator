import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogItemsPropsType = {
  name: string
  id: number
}

const DialogItems = (props: dialogItemsPropsType) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

type messagePropsType = {
  message: string
}

const Message = (props: messagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {

  const dialogsData = [
    {id: 1, name: "Nazim"},
    {id: 2, name: "Bekzhan"},
    {id: 3, name: "Timur"},
    {id: 4, name: "Aldiyar"},
    {id: 5, name: "Ali"},
    {id: 6, name: "Arystan"}
  ];

  const messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How r u?"},
    {id: 3, message: "Yo"},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.contactsItems}>
        <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
      </div>
    </div>
);
};

