import React, {FC} from 'react';
import styles from './ButtonsGroupCardMini.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";
import {Repository} from "../../../types";
import {useNavigate} from "react-router";

interface ButtonsGroupCardMini {
    repo: Repository
}

const ButtonsGroupCardMini: FC<ButtonsGroupCardMini> = ({repo}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/repositories/${repo.owner.login}/${repo.name}`)
    }

    return (
        <div className={styles.buttons}>
            <ButtonLike size={'small'} repo={repo}/>
            <ButtonWithIcon size={'small'} icon={CopyIcon} alt={'Copy URL'}/>
            <ButtonColored text={'Подробнее'} size={'small'} onClick={handleClick}/>
        </div>
    );
};

export default ButtonsGroupCardMini;