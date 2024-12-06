import React from 'react';
import ArrowLeft from '../../../static/left.svg';
import styles from './ButtonBack.module.css'

const ButtonBack = () => {
    return (
        <button className={styles.back}>
            <img src={ArrowLeft} alt={''} className={styles.back_icon}/>
            <p className={styles.back_text}>Back</p>
        </button>
    );
};

export default ButtonBack;