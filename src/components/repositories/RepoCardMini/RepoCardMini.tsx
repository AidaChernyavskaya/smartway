import React, {FC} from 'react';
import styles from './RepoCardMini.module.css';
import {Repository} from "../../../types";
import StarIcon from '../../../static/star.svg';
import ForkIcon from '../../../static/fork.svg';
import HeartTransparent from '../../../static/heart_transparent.svg';
import CopyIcon from '../../../static/copy.svg';
import cn from "classnames";

// const repo: Repository = {
//     id: 12,
//     full_name: 'wewewe/sdsd',
//     owner: {
//         login: '@dfdfdf',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1342004?v=4',
//     },
//     name: 'awsd',
//     description: 'dfdff dfdfdsf dsfdfdc',
//     stargazers_count: 23,
//     forks_count: 445,
//     archived: true,
//     language: 'SD',
//     created_at: "2011-01-26T19:01:12Z",
//     updated_at: "2022-01-26T19:01:12Z",
// }

interface RepoCardMini {
    repo: Repository;
}

const RepoCardMini: FC<RepoCardMini> = ({repo}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_field}>
                <img src={repo.owner.avatar_url} alt={'Avatar photo'} className={styles.avatar}/>
                <div className={styles.tag}>
                    <img src={StarIcon} alt={'Star icon'} className={styles.tag_icon}/>
                    <p className={styles.tag_text}>{repo.stargazers_count}</p>
                </div>
                <div className={styles.tag}>
                    <img src={ForkIcon} alt={'Fork icon'} className={styles.tag_icon}/>
                    <p className={styles.tag_text}>{repo.forks_count}</p>
                </div>
            </div>
            <h3 className={styles.login}>{repo.owner.login}</h3>
            <h4 className={styles.full_name}>{repo.full_name}</h4>
            <div className={styles.buttons}>
                <button className={cn(styles.button, styles.button_transparent)}>
                    <img src={HeartTransparent} alt={'Add to favourites'} className={cn(styles.button_icon, styles.heart)}/>
                </button>
                <button className={cn(styles.button, styles.button_transparent)} >
                    <img src={CopyIcon} alt={'Copy URL'} className={styles.button_icon}/>
                </button>
                <button className={cn(styles.button, styles.button_colored)}>
                    <p className={styles.button_text}>Подробнее</p>
                </button>
            </div>
        </div>
    );
};

export default RepoCardMini;