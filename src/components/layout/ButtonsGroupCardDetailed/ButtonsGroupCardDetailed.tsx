import React, {FC} from 'react';
import styles from './ButtonsGroupCardDetailed.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";
import {Repository} from "../../../types";
import copy from 'clipboard-copy';

interface ButtonsGroupCardDetailed {
    repo: Repository
}

const ButtonsGroupCardDetailed: FC<ButtonsGroupCardDetailed> = ({repo}) => {
    const handleClick = () => {
        window.open(repo.html_url, "_blank");
    }

    const handleCopy = () => {
        copy(repo.html_url);
    }

    return (
        <div className={styles.buttons}>
            <ButtonWithIcon size={'big'} icon={CopyIcon} alt={'Copy URL'} onClick={handleCopy}/>
            <ButtonLike size={'big'} repo={repo}/>
            <ButtonColored text={'Открыть репозиторий'} size={'big'} onClick={handleClick}/>
        </div>
    );
};

export default ButtonsGroupCardDetailed;