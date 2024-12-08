import React, {FC} from 'react';
import styles from './ButtonWithIcon.module.css';
import cn from "classnames";

interface ButtonWithIcon {
    size: 'small' | 'big';
    icon: string;
    alt: string;
    onClick : () => void;
}

const ButtonWithIcon: FC<ButtonWithIcon> = ({size, icon, alt, onClick}) => {
    return (
        <button className={cn(styles.button, size === 'small' ? styles.small : styles.big)} onClick={onClick}>
            <img src={icon} alt={alt} className={styles.button_icon}/>
        </button>
    );
};

export default ButtonWithIcon;