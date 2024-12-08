import React, {FC} from 'react';
import SortFilter from "../../library/SortFilter/SortFilter";
import {observer} from "mobx-react-lite";
import styles from './SortFieldLayout.module.css';

interface SortFieldLayout {
    text: string;
    count: number;
}

const SortFieldLayout: FC<SortFieldLayout> = observer(({text, count}) => {
    return (
        <div className={styles.repos_info}>
            <h2 className={styles.result}>{text}: {count} repositories</h2>
            <SortFilter/>
        </div>
    );
});

export default SortFieldLayout;