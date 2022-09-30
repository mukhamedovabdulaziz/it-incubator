import React from 'react';
import s from "./Dialogs.module.css"
import {findAllByDisplayValue} from "@testing-library/react";
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
  return (
    <div className={s.dialogs}>
      <div className={s.contactsItems}>
        <DialogItems name={"Nazim"} id={1}/>
        <DialogItems name={"Bekzhan"} id={2}/>
        <DialogItems name={"Timur"} id={3}/>
        <DialogItems name={"Aldiyar"} id={4}/>
        <DialogItems name={"Ali"} id={5}/>
        <DialogItems name={"Arystan"} id={6}/>
      </div>
      <div className={s.messages}>
        <Message message={"Hi"}/>
        <Message message={"How r u?"}/>
        <Message message={"Yo"}/>
      </div>
    </div>
);
};

