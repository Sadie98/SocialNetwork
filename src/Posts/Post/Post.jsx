import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src={props.avatarImage}/>
            <p className={s.text}>{props.text}</p>
            <img className={s.post_image} src={props.postImage}/>
        </div>
    )
}

export default Post;
