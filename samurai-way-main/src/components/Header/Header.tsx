import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQHeTQsBATkdwg/company-logo_200_200/0/1575544858313?e=2147483647&v=beta&t=18ncVsO6jYPAgpdianbDyvnJdSZsPfs38h2xMseE9eo"
                alt="logo"/>
        </header>
    )
}