import React, {FC} from 'react';
import styles from './ButtonWithIcon.module.css';
import cn from "classnames";

interface ButtonWithIcon {
    size: 'small' | 'big';
    icon: string;
    alt: string;
}

const ButtonWithIcon: FC<ButtonWithIcon> = ({size, icon, alt}) => {
    return (
        <button className={cn(styles.button, size === 'small' ? styles.small : styles.big)} >
            <img src={icon} alt={alt} className={styles.button_icon}/>
        </button>
    );
};

export default ButtonWithIcon;