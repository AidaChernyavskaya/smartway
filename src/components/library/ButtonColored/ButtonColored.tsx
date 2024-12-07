import React, {FC} from 'react';
import styles from './ButtonColored.module.css';
import cn from "classnames";

interface ButtonColored {
    text: string;
    size: 'small' | 'big'
}

const ButtonColored: FC<ButtonColored> = ({size, text}) => {
    return (
        <button className={cn(styles.button_colored, size === 'small' ? styles.small: styles.big)}>
            <p className={styles.button_text}>{text}</p>
        </button>
    );
};

export default ButtonColored;