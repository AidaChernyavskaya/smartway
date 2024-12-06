import React from 'react';
import styles from './Navbar.module.css';
import SearchIcon from '../../../static/search_new.svg';
import HeartFilled from '../../../static/heart_filled.svg';
import AccountPhoto from '../../../static/account_photo.svg';
import cn from 'classnames';
import {Link} from "react-router";

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <Link to={'/'} className={styles.logo}>
                    <img src={SearchIcon} alt={'Logo icon'} className={styles.logo_img}/>
                    <p className={styles.logo_title}>GitHubSearch</p>
            </Link>
            <div className={styles.buttons}>
                <Link to={'/favourites'}>
                    <button className={cn(styles.button, styles.button_transparent)}>
                        <img src={HeartFilled} alt={'Open favourites'} className={styles.button_icon}/>
                    </button>
                </Link>
                <button className={cn( styles.button, styles.button_filled)}>
                    <img src={AccountPhoto} alt={'Account photo'} className={styles.button_icon}/>
                </button>
            </div>

        </header>
    );
};

export default Navbar;