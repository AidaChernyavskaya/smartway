import React, {FC, useState} from 'react';
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import HeartColored from '../../../static/heart_colored.svg';
import styles from '../ButtonWithIcon/ButtonWithIcon.module.css';

interface ButtonLike {
    size: 'small' | 'big';
}

const ButtonLike: FC<ButtonLike> = ({size}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked((prev) => !prev)
    }

    return (
        <button className={cn(styles.button, size === 'small' ? styles.small : styles.big)} onClick={handleClick}>
            <img src={isLiked ? HeartColored : HeartTransparent} alt={'Add to favourites'} className={styles.button_icon}/>
        </button>
    );
};

export default ButtonLike;