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
import detailedRepositoryStore from "../../../stores/DetailedRepositoryStore";
import {formatDate} from "../../../formatters";
import {ProfileTagProperty} from "../../../types";

const ProfileProperties = observer(() => {
    const repo = detailedRepositoryStore.repository;
    let properties: ProfileTagProperty[] = [];

    if (repo) {
        properties = [
            {icon: StarIcon, info: repo.stargazers_count.toString(), about: 'Количество звезд'},
            {icon: ForkIcon, info: repo.forks_count.toString(), about: 'Количество форков'},
            {icon: ArchiveIcon, info: repo.archived ? 'Да' : 'Нет', about: 'В архиве'},
            {icon: LanguageIcon, info: repo.language, about: 'Язык'},
            {icon: FolderIcon, info: formatDate(repo.created_at), about: 'Создано'},
            {icon: UpdateIcon, info: formatDate(repo.created_at), about: 'Изменено'}
        ]
    }

    return (
        <div className={styles.profile_properties}>
            {properties.map((property, index) => (
                <Property key={`property${index}`} icon={property.icon} info={property.info} text={property.about}/>
            ))}
        </div>
    );
});

export default ProfileProperties;