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
      <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItems name={"Nazim"} id={1}/>
        <DialogItems name={"Bekzhan"} id={2}/>
        <DialogItems name={"Timur"} id={3}/>
        <DialogItems name={"Aldiyar"} id={4}/>
        <DialogItems name={"Ali"} id={5}/>
        <DialogItems name={"Arystan"} id={6}/>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How r u?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
);
};

