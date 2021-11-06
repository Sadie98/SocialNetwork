import s from './Menu.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.menu_item}>
                <NavLink to='posts'>My posts</NavLink>
            </div>
            <div className={s.menu_item}>
                <NavLink to='dialogs'>Dialogs</NavLink>
            </div>
            <div className={s.menu_item}>Friends</div>
            <div className={s.menu_item}>Music</div>
        </div>
    )
}

export default Menu;
