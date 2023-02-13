import React, { JSXElementConstructor } from 'react';
import styles from './navigation-item.module.css';

export interface NavigationItemInterface {
    icon: any, 
    text: string, 
    action: string,
    active?: boolean
}

const NavigationItem: React.FC<NavigationItemInterface> = ({...props}) => {

    const  {
        icon,
        text,
        action,
        active
    } = props;

    return (
        <>
            <div className={active ? styles.active__navigation__item : styles.navigation__item}>
                <div className={styles.navigation__item__icon}>
                    {icon}
                </div>
                <div className={styles.navigation__item__text}>
                    <p className="text-dark text-menu-item">{text}</p>
                </div>
                { action && 
                    <div className={styles.navigation__item__action}>
                        {action}
                    </div> 
                }
            </div>
        </>
    )
}

export default NavigationItem;