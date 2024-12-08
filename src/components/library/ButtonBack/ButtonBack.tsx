import React from 'react';
import ArrowLeft from '../../../static/left.svg';
import styles from './ButtonBack.module.css'
import {Link} from "react-router";

const ButtonBack = () => {
    return (
        <Link to={'/'} className={styles.back}>
            <img src={ArrowLeft} alt={''} className={styles.back_icon}/>
            <p className={styles.back_text}>Back</p>
        </Link>
    );
};

export default ButtonBack;