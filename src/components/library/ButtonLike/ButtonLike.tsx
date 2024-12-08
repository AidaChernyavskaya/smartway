import React, {FC, useState} from 'react';
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import HeartColored from '../../../static/heart_colored.svg';
import styles from '../ButtonWithIcon/ButtonWithIcon.module.css';
import {observer} from "mobx-react-lite";
import favouritesStore from "../../stores/FavouritesStore";
import {Repository} from "../../../types";

interface ButtonLike {
    size: 'small' | 'big';
    repo: Repository
}

const ButtonLike: FC<ButtonLike> = observer(({size, repo}) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked((prev) => !prev)
        console.log('repo', repo)
        if (favouritesStore.isDataExist(repo)) {
            favouritesStore.removeData(repo);
        } else {
            favouritesStore.addData(repo);
        }
    }

    return (
        <button className={cn(styles.button, size === 'small' ? styles.small : styles.big)} onClick={handleClick}>
            <img src={isLiked ? HeartColored : HeartTransparent} alt={'Add to favourites'} className={styles.button_icon}/>
        </button>
    );
});

export default ButtonLike;