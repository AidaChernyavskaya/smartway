import React, {useEffect} from 'react';
import styles from "./RepoCardDetailed.module.css";
import ProfileProperties from "../../layout/ProfileProperties/ProfileProperties";
import ButtonsGroupCardDetailed from "../../layout/ButtonsGroupCardDetailed/ButtonsGroupCardDetailed";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import DetailedRepositoryStore from "../../../stores/DetailedRepositoryStore";
import detailedRepositoryStore from "../../../stores/DetailedRepositoryStore";
import Loader from "../Loader/Loader";
import repositoriesStore from "../../../stores/RepositoriesStore";

const RepoCardDetailed = observer(() => {
    const { owner, repoName } = useParams();
    const repo = detailedRepositoryStore.repository;

    useEffect(() => {
        if (owner && repoName) {
            DetailedRepositoryStore.loadDetailedRepository(owner, repoName)
        }
    }, [owner, repoName])

    if (detailedRepositoryStore.isLoading) {
        return <Loader/>
    }

    if (!repo || detailedRepositoryStore.error) {
        return <h2 className={styles.error}>Ошибка: {repositoriesStore.error ? repositoriesStore.error : 'Нет такого репозитория'}</h2>;
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.profile}>Профиль</h2>

            <div className={styles.profile_info}>
                <img src={repo.owner.avatar_url} alt={'Avatar photo'} className={styles.avatar}/>
                <h4 className={styles.full_name}>{repo.full_name}</h4>
                <p className={styles.description}>{repo.description ? repo.description : 'Нет описания репозитория'}</p>
            </div>

            <ProfileProperties/>
            <hr className={styles.hr}/>
            <ButtonsGroupCardDetailed repo={repo}/>
        </div>
    );
});

export default RepoCardDetailed;