import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
  return (
    <div className={"dialogs"}>
      <div className={"dialogs-items"}>
        <div className="item">
          Nazim
        </div>
        <div className="item">
          Bekzhan
        </div>
        <div className="item">
          Timur
        </div>
        <div className="item">
          Aldiyar
        </div>
        <div className="item">
          Ali
        </div>
        <div className="item">
          Arystan
        </div>
      </div>
    </div>
    <div className={"messages"}></div>
  );
};

