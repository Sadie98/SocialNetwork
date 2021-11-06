import s from './Header.module.css'
import avatar from './../assets/images/avatarExample.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.search}> </div>
            <div class={s.user_info}>
                <span className={s.user_name}>Uliana Stiagailo</span>
                <img className={s.avatar} src={avatar} alt="avatar"/>
            </div>
        </div>
    );
}

export default Header;
