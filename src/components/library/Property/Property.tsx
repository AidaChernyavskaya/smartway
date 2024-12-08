import React, {FC} from 'react';
import styles from './Property.module.css';

interface Property {
    icon: string;
    info: string;
    text: string;
}

const Property: FC<Property> = ({icon, info, text}) => {
    if(!info) {
        return <></>
    }

    return (
        <div className={styles.property}>
            <div className={styles.property_icon__container}>
                <img src={icon} alt={''} className={styles.property_icon}/>
            </div>
            <p className={styles.property_text}>{info}</p>
            <p className={styles.property_info}>{text}</p>
        </div>
    );
};

export default Property;