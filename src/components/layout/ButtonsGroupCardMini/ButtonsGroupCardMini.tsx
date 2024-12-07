import React from 'react';
import styles from './ButtonsGroupCardMini.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";



const ButtonsGroupCardMini = () => {
    return (
        <div className={styles.buttons}>
            <ButtonLike size={'small'}/>
            <ButtonWithIcon size={'small'} icon={CopyIcon} alt={'Copy URL'}/>
            <ButtonColored text={'Подробнее'} size={'small'}/>
        </div>
    );
};

export default ButtonsGroupCardMini;