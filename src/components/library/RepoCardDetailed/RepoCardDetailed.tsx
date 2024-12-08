import React, {useEffect} from 'react';
import styles from "./RepoCardDetailed.module.css";
import cn from "classnames";
import HeartTransparent from "../../../static/heart_transparent.svg";
import CopyIcon from "../../../static/copy.svg";
import ProfileProperties from "../../layout/ProfileProperties/ProfileProperties";
import ButtonsGroupCardMini from "../../layout/ButtonsGroupCardMini/ButtonsGroupCardMini";
import ButtonsGroupCardDetailed from "../../layout/ButtonsGroupCardDetailed/ButtonsGroupCardDetailed";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import DetailedRepositoryStore from "../../stores/DetailedRepositoryStore";
import detailedRepositoryStore from "../../stores/DetailedRepositoryStore";
import Loader from "../Loader/Loader";

// export const repo: Repository = {
//     id: 12,
//     full_name: 'wewewe/sdsd',
//     owner: {
//         login: '@dfdfdf',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1342004?v=4',
//     },
//     name: 'awsd',
//     description: 'Программа для автоматической лемматизации и морфологического анализа русских текстов 15—17 вв',
//     stargazers_count: 23,
//     forks_count: 445,
//     archived: true,
//     language: 'SD',
//     created_at: "2011-01-26T19:01:12Z",
//     updated_at: "2022-01-26T19:01:12Z",
// }

const RepoCardDetailed = observer(() => {
    const { owner, repoName } = useParams();
    const repo = detailedRepositoryStore.repository;
    const isLoading = detailedRepositoryStore.isLoading;

    useEffect(() => {
        if (owner && repoName) {
            DetailedRepositoryStore.fetchDetailedRepository(owner, repoName)
        }
    }, [owner, repoName])

    if (!repo) {
        return <div>error</div>
    }

    if (detailedRepositoryStore.isLoading) {
        return <Loader/>
    }

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
        </div>
    );
});

export default RepoCardDetailed;