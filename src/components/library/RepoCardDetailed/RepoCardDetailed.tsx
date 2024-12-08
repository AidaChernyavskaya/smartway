import React from 'react';
import {Repository} from "../../../types";
import styles from "./RepoCardDetailed.module.css";
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import CopyIcon from "../../../static/copy.svg";
import ProfileProperties from "../../layout/ProfileProperties/ProfileProperties";
import ButtonsGroupCardMini from "../../layout/ButtonsGroupCardMini/ButtonsGroupCardMini";
import ButtonsGroupCardDetailed from "../../layout/ButtonsGroupCardDetailed/ButtonsGroupCardDetailed";

export const repo: Repository = {
    id: 12,
    full_name: 'wewewe/sdsd',
    owner: {
        login: '@dfdfdf',
        avatar_url: 'https://avatars.githubusercontent.com/u/1342004?v=4',
    },
    name: 'awsd',
    description: 'Программа для автоматической лемматизации и морфологического анализа русских текстов 15—17 вв',
    stargazers_count: 23,
    forks_count: 445,
    archived: true,
    language: 'SD',
    created_at: "2011-01-26T19:01:12Z",
    updated_at: "2022-01-26T19:01:12Z",
}

const RepoCardDetailed = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.profile}>Профиль</h2>

            <div className={styles.profile_info}>
                <img src={repo.owner.avatar_url} alt={'Avatar photo'} className={styles.avatar}/>
                <h4 className={styles.full_name}>{repo.full_name}</h4>
                <p className={styles.description}>{repo.description}</p>
            </div>

            <ProfileProperties/>

            <hr className={styles.hr}/>

            <ButtonsGroupCardDetailed repo={repo}/>

            {/*<div className={styles.buttons}>*/}
            {/*    <button className={cn(styles.button, styles.button_transparent)}>*/}
            {/*        <img src={HeartTransparent} alt={'Add to favourites'} className={cn(styles.button_icon, styles.heart)}/>*/}
            {/*    </button>*/}
            {/*    <button className={cn(styles.button, styles.button_transparent)} >*/}
            {/*        <img src={CopyIcon} alt={'Copy URL'} className={styles.button_icon}/>*/}
            {/*    </button>*/}
            {/*    <button className={cn(styles.button, styles.button_colored)}>*/}
            {/*        <p className={styles.button_text}>Открыть репозиторий</p>*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>
    );
};

export default RepoCardDetailed;