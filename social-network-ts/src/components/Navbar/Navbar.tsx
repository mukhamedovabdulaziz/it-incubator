import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar () {

  type actionPropsType = {
    [key: string]: boolean
  }

  const setAction = ({isActive}: actionPropsType) => isActive ? s.active : s.item

  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={setAction}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={setAction}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={setAction}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={setAction}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={setAction}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;