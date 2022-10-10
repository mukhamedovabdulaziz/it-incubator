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

  type dialogsDataType = {
    id: number
    name: string
  }

  type messagesDataType = {
    id: number
    message: string
  }

  const dialogs: Array<dialogsDataType> = [
    {id: 1, name: "Nazim"},
    {id: 2, name: "Bekzhan"},
    {id: 3, name: "Timur"},
    {id: 4, name: "Aldiyar"},
    {id: 5, name: "Ali"},
    {id: 6, name: "Arystan"}
  ];

  const messages: Array<messagesDataType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How r u?"},
    {id: 3, message: "Yo"},
  ];

  let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);

  let messagesElements = messages.map(m => <Message message={m.message}/>
  )

  return (
    <div className={s.dialogs}>
      <div className={s.contactsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

