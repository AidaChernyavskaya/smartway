import React from 'react';
import styles from "./ProfileProperties.module.css";
import StarIcon from "../../../static/star.svg";
import ForkIcon from "../../../static/fork.svg";
import ArchiveIcon from "../../../static/archive.svg";
import LanguageIcon from "../../../static/language.svg";
import FolderIcon from "../../../static/folder.svg";
import UpdateIcon from "../../../static/update.svg";
import Property from "../../library/Property/Property";
import {observer} from "mobx-react-lite";
import detailedRepositoryStore from "../../stores/DetailedRepositoryStore";
import {dateFormatting} from "../../../formatters";
import {ProfileTagProperty} from "../../../types";

const ProfileProperties = observer(() => {
    const repo = detailedRepositoryStore.repository;
    let properties: ProfileTagProperty[] = [];

    if (repo) {
        properties = [
            [StarIcon, repo.stargazers_count.toString(), 'Количество звезд'],
            [ForkIcon, repo.forks_count.toString(), 'Количество форков'],
            [ArchiveIcon, repo.archived ? 'Да' : 'Нет', 'В архиве'],
            [LanguageIcon, repo.language, 'Язык'],
            [FolderIcon, dateFormatting(repo.created_at), 'Создано'],
            [UpdateIcon, dateFormatting(repo.created_at), 'Изменено']
        ]
    }

    return (
        <div className={styles.profile_properties}>
            {properties.map((property, index) => (
                <Property key={`property${index}`} icon={property[0]} info={property[1]} text={property[2]}/>
            ))}
        </div>
    );
});

export default ProfileProperties;