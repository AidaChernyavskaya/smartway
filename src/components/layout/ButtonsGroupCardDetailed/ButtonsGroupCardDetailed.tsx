import React, {FC} from 'react';
import styles from './ButtonsGroupCardDetailed.module.css';
import CopyIcon from "../../../static/copy.svg";
import ButtonColored from "../../library/ButtonColored/ButtonColored";
import ButtonLike from "../../library/ButtonLike/ButtonLike";
import ButtonWithIcon from "../../library/ButtonWithIcon/ButtonWithIcon";
import {Repository} from "../../../types";

interface ButtonsGroupCardDetailed {
    repo: Repository
}


const ButtonsGroupCardDetailed: FC<ButtonsGroupCardDetailed> = ({repo}) => {
    return (
        <div className={styles.buttons}>
            <ButtonWithIcon size={'big'} icon={CopyIcon} alt={'Copy URL'}/>
            <ButtonLike size={'big'} repo={repo}/>
            <ButtonColored text={'Открыть репозиторий'} size={'big'}/>
        </div>
    );
};

export default ButtonsGroupCardDetailed;