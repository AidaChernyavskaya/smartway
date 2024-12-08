import React, {FC} from 'react';
import styles from './RepoCardMini.module.css';
import {Repository} from "../../../types";
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
        </div>
    );
};

export default RepoCardMini;