import React, {FC} from 'react';
import styles from './ButtonWithIcon.module.css';
import cn from "classnames";
import {ButtonSize} from "../../../types";

interface ButtonWithIcon {
    size: ButtonSize;
    icon: string;
    alt: string;
    onClick : () => void;
}

const ButtonWithIcon: FC<ButtonWithIcon> = ({size, icon, alt, onClick}) => {
    return (
        <button className={cn(styles.button, styles[size])} onClick={onClick}>
            <img src={icon} alt={alt} className={styles.button_icon}/>
        </button>
    );
};

export default ButtonWithIcon;