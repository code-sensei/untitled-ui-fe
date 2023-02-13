import React from 'react';
import styles from './divider.module.css';

interface DividerInterface {
    direction: 'horizontal' | 'vertical'
}

const Divider: React.FC<DividerInterface> = ({...props}) => {

    const {
        direction= 'horizontal'
    } = props;

    return (
        <>
            <div className={
                direction === 'horizontal' ? 
                styles.horizontal__divider : 
                styles.vertical__divider
            }></div>
        </>
    )
}

export default Divider;