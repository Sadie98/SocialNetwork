import React from "react";
import s from './Posts.module.css';
import DialogsBackground from './../assets/images/dialogsBackground.jpg'

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.background}>
                <img src={DialogsBackground}/>
            </div>
            <div className={s.new_post}>
                <textarea className={s.create_textarea}/>
                <button className={s.create_button}>Create post</button>
            </div>
            <div class={s.posts_list}></div>
        </div>
    )
}

export default Posts;
