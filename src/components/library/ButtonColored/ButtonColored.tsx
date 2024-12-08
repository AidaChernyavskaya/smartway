import React, {FC} from 'react';
import styles from './ButtonColored.module.css';
import cn from "classnames";
import {ButtonSize} from "../../../types";

interface ButtonColored {
    text: string;
    size: ButtonSize;
    onClick: () => void;
}

const ButtonColored: FC<ButtonColored> = ({size, text, onClick}) => {
    return (
        <button className={cn(styles.button_colored, styles[size])} onClick={onClick}>
            <p className={styles.button_text}>{text}</p>
        </button>
    );
};

export default ButtonColored;