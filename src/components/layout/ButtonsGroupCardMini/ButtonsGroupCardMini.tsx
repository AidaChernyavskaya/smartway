import React, {FC} from 'react';
import styles from './ButtonsGroupCardMini.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";
import {ButtonSize, Repository} from "../../../types";
import {useNavigate} from "react-router";
import copy from "clipboard-copy";

interface ButtonsGroupCardMini {
    repo: Repository
}

const ButtonsGroupCardMini: FC<ButtonsGroupCardMini> = ({repo}) => {
    const navigate = useNavigate();

    const handleOpenProfileClick = () => {
        navigate(`/repositories/${repo.owner.login}/${repo.name}`)
    }

    const handleCopyClick = () => {
        copy(repo.html_url);
    }

    return (
        <div className={styles.buttons}>
            <ButtonLike size={ButtonSize.small} repo={repo}/>
            <ButtonWithIcon size={ButtonSize.small} icon={CopyIcon} alt={'Copy URL'} onClick={handleCopyClick}/>
            <ButtonColored text={'Подробнее'} size={ButtonSize.small} onClick={handleOpenProfileClick}/>
        </div>
    );
};

export default ButtonsGroupCardMini;