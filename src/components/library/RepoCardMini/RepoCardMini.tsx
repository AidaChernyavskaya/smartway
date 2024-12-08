import React, {FC} from 'react';
import styles from './RepoCardMini.module.css';
import {Repository} from "../../../types";
import StarIcon from '../../../static/star.svg';
import ForkIcon from '../../../static/fork.svg';
import HeartTransparent from '../../../static/heart_transparent.svg';
import CopyIcon from '../../../static/copy.svg';
import cn from "classnames";
import CardMiniTags from "../../layout/CardMiniTags/CardMiniTags";
import ButtonsGroupCardMini from "../../layout/ButtonsGroupCardMini/ButtonsGroupCardMini";

interface RepoCardMini {
    repo: Repository;
}

const RepoCardMini: FC<RepoCardMini> = ({repo}) => {
    return (
        <div className={styles.card}>
            <CardMiniTags repo={repo}/>
            <h3 className={styles.login}>{repo.owner.login}</h3>
            <h4 className={styles.full_name}>{repo.full_name}</h4>
            <ButtonsGroupCardMini repo={repo}/>
            {/*<div className={styles.buttons}>*/}
            {/*    <button className={cn(styles.button, styles.button_transparent)}>*/}
            {/*        <img src={HeartTransparent} alt={'Add to favourites'} className={cn(styles.button_icon, styles.heart)}/>*/}
            {/*    </button>*/}
            {/*    <button className={cn(styles.button, styles.button_transparent)} >*/}
            {/*        <img src={CopyIcon} alt={'Copy URL'} className={styles.button_icon}/>*/}
            {/*    </button>*/}
            {/*    <button className={cn(styles.button, styles.button_colored)}>*/}
            {/*        <p className={styles.button_text}>Подробнее</p>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default RepoCardMini;