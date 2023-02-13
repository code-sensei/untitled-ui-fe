import { CheckIcon } from '@/components/icons';
import { BillingItem } from 'pages';
import cn from 'clsx';
import React from 'react';
import styles from './status-badge.module.css';

type StatusBadge = Pick<BillingItem, 'status'>;

const StatusBadge: React.FC<StatusBadge> = ({...props}) => {

    const {
        status
    } = props;

    const textColor = cn(
        {
            [styles.paid__text]: status === 'Paid',
            [styles.unpaid__text]: status === 'Unpaid'
        }
    )

    const badgeColor = cn(
        {
            [styles.paid__status]: status === 'Paid',
            [styles.unpaid__status]: status === 'Unpaid'
        }
    )

    return (
        <div className={styles.status__badge__container}>
            <div className={badgeColor}>
                <div className={textColor}>
                    <CheckIcon />
                </div>
                <div className={textColor}>
                    { status }
                </div>
            </div>
        </div>
    )   
}

export default StatusBadge;