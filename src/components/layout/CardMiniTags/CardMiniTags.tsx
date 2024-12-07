import React, {FC} from 'react';
import styles from './CardMiniTags.module.css';
import StarIcon from "../../../static/star.svg";
import ForkIcon from "../../../static/fork.svg";
import {MiniTag, Repository} from "../../../types";

interface CardMiniTags {
    repo: Repository;
}

const CardMiniTags: FC<CardMiniTags> = ({repo}) => {

    const tags: MiniTag[] = [
        {src: StarIcon, alt: 'Star icon', info: repo.stargazers_count},
        {src: ForkIcon, alt: 'Fork icon', info: repo.forks_count},
    ]

    return (
        <div className={styles.card_field}>
            <img src={repo.owner.avatar_url} alt={'Avatar photo'} className={styles.avatar}/>

            {tags.map((tag, index) => (
                <div className={styles.tag} key={`miniTag${index}`}>
                    <img src={tag.src} alt={tag.alt} className={styles.tag_icon}/>
                    <p className={styles.tag_text}>{tag.info}</p>
                </div>
            ))}
        </div>
    );
};

export default CardMiniTags;