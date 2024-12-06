import React from 'react';
import {Repository} from "../../../types";
import styles from "../RepoCardDetailed/RepoCardDetailed.module.css";
import StarIcon from '../../../static/star.svg';
import ForkIcon from '../../../static/fork.svg';
import ArchiveIcon from '../../../static/archive.svg';
import FolderIcon from '../../../static/folder.svg';
import LanguageIcon from '../../../static/language.svg';
import UpdateIcon from '../../../static/update.svg';
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import CopyIcon from "../../../static/copy.svg";

const repo: Repository = {
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

            <div className={styles.profile_properties}>
                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={StarIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.stargazers_count}</p>
                    <p className={styles.property_info}>Количество звезд</p>
                </div>

                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={ForkIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.forks_count}</p>
                    <p className={styles.property_info}>Количество форков</p>
                </div>

                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={ArchiveIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.archived ? 'Да' : 'Нет'}</p>
                    <p className={styles.property_info}>В архиве</p>
                </div>

                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={LanguageIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.language}</p>
                    <p className={styles.property_info}>Язык</p>
                </div>

                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={FolderIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.created_at}</p>
                    <p className={styles.property_info}>Создано</p>
                </div>

                <div className={styles.property}>
                    <div className={styles.property_icon__container}>
                        <img src={UpdateIcon} alt={''} className={styles.property_icon}/>
                    </div>
                    <p className={styles.property_text}>{repo.updated_at}</p>
                    <p className={styles.property_info}>Изменено</p>
                </div>
            </div>

            <hr className={styles.hr}/>

            <div className={styles.buttons}>
                <button className={cn(styles.button, styles.button_transparent)}>
                    <img src={HeartTransparent} alt={'Add to favourites'} className={cn(styles.button_icon, styles.heart)}/>
                </button>
                <button className={cn(styles.button, styles.button_transparent)} >
                    <img src={CopyIcon} alt={'Copy URL'} className={styles.button_icon}/>
                </button>
                <button className={cn(styles.button, styles.button_colored)}>
                    <p className={styles.button_text}>Открыть репозиторий</p>
                </button>
            </div>

        </div>
    );
};

export default RepoCardDetailed;