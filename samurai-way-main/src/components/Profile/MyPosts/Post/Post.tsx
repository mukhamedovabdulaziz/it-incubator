import React from "react";
import s from "./Post.module.css"

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.dlf.pt/dfpng/middlepng/602-6027127_cool-profile-avatar-picture-cool-profile-pictures-for.png"
                alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}