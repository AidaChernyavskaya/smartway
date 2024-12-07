import React from 'react';
import styles from "./ProfileProperties.module.css";
import StarIcon from "../../../static/star.svg";
import ForkIcon from "../../../static/fork.svg";
import ArchiveIcon from "../../../static/archive.svg";
import LanguageIcon from "../../../static/language.svg";
import FolderIcon from "../../../static/folder.svg";
import UpdateIcon from "../../../static/update.svg";
import {repo} from "../../library/RepoCardDetailed/RepoCardDetailed";
import Property from "../../library/Property/Property";


const ProfileProperties = () => {
    const properties = [
        [StarIcon, repo.stargazers_count, 'Количество звезд'],
        [ForkIcon, repo.forks_count, 'Количество форков'],
        [ArchiveIcon, repo.archived ? 'Да' : 'Нет', 'В архиве'],
        [LanguageIcon, repo.language, 'Язык'],
        [FolderIcon, repo.created_at, 'Создано'],
        [UpdateIcon, repo.created_at, 'Изменено']
    ]

    return (
        <div className={styles.profile_properties}>
            {properties.map((property, index) => (
                <Property key={`property${index}`} icon={property[0]} info={property[1]} text={property[2]}/>
            ))}
        </div>
    );
};

export default ProfileProperties;