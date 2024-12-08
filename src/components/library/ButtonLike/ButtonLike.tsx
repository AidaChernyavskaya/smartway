import React, {FC} from 'react';
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import HeartColored from '../../../static/heart_colored.svg';
import styles from '../ButtonWithIcon/ButtonWithIcon.module.css';
import {observer} from "mobx-react-lite";
import favouritesStore from "../../stores/FavouritesStore";
import {Repository} from "../../../types";

interface ButtonLike {
    size: 'small' | 'big';
    repo: Repository;
}

const ButtonLike: FC<ButtonLike> = observer(({size, repo}) => {

    const handleClick = () => {
        if (favouritesStore.isDataExist(repo)) {
            favouritesStore.removeData(repo);
        } else {
            favouritesStore.addData(repo);
        }
    }

    return (
        <button className={cn(styles.button, size === 'small' ? styles.small : styles.big)} onClick={handleClick}>
            <img
                src={favouritesStore.isDataExist(repo) ? HeartColored : HeartTransparent}
                alt={'Add to favourites'} className={styles.button_icon}
            />
        </button>
    );
});

export default ButtonLike;