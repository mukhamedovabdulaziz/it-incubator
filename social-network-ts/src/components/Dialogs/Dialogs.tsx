import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../redux/state";

type dialogsMessagesType = {
  dialogs: Array<dialogsDataType>
  messages: Array<messagesDataType>
}

function Dialogs(props: dialogsMessagesType) {

  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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

export default Dialogs;