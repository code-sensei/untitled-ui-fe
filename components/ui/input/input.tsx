import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    icon: any
}

const Input: React.FC<Input> = ({...props}) => {

    const {
        placeholder,
        icon
    } = props;

    return (
        <div className={styles.input__container}>
            <div className={styles.input__icon}>
                { icon }
            </div>
            <div className={styles.input__content}>
                <input 
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input;