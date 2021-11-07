import React from "react";
import s from './Posts.module.css';
import DialogsBackground from './../assets/images/dialogsBackground.jpg'
import Post from './Post/Post'

import meme1 from './../assets/images/meme1.jpg'
import meme2 from './../assets/images/meme2.jpg'
import meme3 from './../assets/images/meme3.jpg'
import meme4 from './../assets/images/meme4.jpg'
import avatarExample from './../assets/images/avatarExample.jpg'

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
            <div class={s.posts_list}>
                <Post avatarImage={avatarExample} postImage={meme1} text='Смотрите меме 1'/>
                <Post avatarImage={avatarExample} postImage={meme2} text='Смотрите меме 2'/>
                <Post avatarImage={avatarExample} postImage={meme3} text='Смотрите меме 3'/>
                <Post avatarImage={avatarExample} postImage={meme4} text='Смотрите меме 4'/>
            </div>
        </div>
    )
}

export default Posts;
