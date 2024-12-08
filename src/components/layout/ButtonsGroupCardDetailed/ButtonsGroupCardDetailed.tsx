import React, {FC} from 'react';
import styles from './ButtonsGroupCardDetailed.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";
import {ButtonSize, Repository} from "../../../types";
import copy from 'clipboard-copy';

interface ButtonsGroupCardDetailed {
    repo: Repository
}

const ButtonsGroupCardDetailed: FC<ButtonsGroupCardDetailed> = ({repo}) => {
    const handleOpenRepoClick = () => {
        window.open(repo.html_url, "_blank");
    }

    const handleCopyClick = () => {
        copy(repo.html_url);
    }

    return (
        <div className={styles.buttons}>
            <ButtonWithIcon size={ButtonSize.big} icon={CopyIcon} alt={'Copy URL'} onClick={handleCopyClick}/>
            <ButtonLike size={ButtonSize.big} repo={repo}/>
            <ButtonColored text={'Открыть репозиторий'} size={ButtonSize.big} onClick={handleOpenRepoClick}/>
        </div>
    );
};

export default ButtonsGroupCardDetailed;