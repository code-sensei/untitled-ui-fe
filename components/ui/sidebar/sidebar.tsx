import { BarChart2Icon, HomeIcon, LogooutIcon, PlayIcon, ProjectsIcon, ReportingIcon, SearchIcon, SettingsIcon, SupportIcon, TasksIcon, UsersIcon } from '@/components/icons';
import Image from 'next/image';
import { useState } from 'react';
import Divider from '../divider';
import Input from '../input';
import NavigationItem, { NavigationItemInterface } from '../navigation-item/navigation-item';
import styles from './sidebar.module.css';

const Sidebar = ({...props}) => {

    const [ navigationItems, sertNavigationItems ] = useState<NavigationItemInterface[]>([
        {
            icon: <HomeIcon />,
            text: 'Home',
            action: ''
        },
        {
            icon: <BarChart2Icon />,
            text: 'Dashboard',
            action: '10'
        },
        {
            icon: <ProjectsIcon />,
            text: 'Projects',
            action: ''
        },
        {
            icon: <TasksIcon />,
            text: 'Tasks',
            action: ''
        },
        {
            icon: <ReportingIcon />,
            text: 'Reporting',
            action: ''
        },
        {
            icon: <UsersIcon />,
            text: 'Users',
            action: ''
        }
    ])

    const [ navigationFooterItems, sertNavigationFooterItems ] = useState<NavigationItemInterface[]>([
        {
            icon: <SupportIcon />,
            text: 'Support',
            action: ''
        },
        {
            icon: <SettingsIcon />,
            text: 'Settings',
            action: '',
            active: true
        }
    ])
    return (
        <div className={styles.sidebar__container}>
            <Image 
                src={'images/Logo.svg'}
                height={32}
                width={143}
                alt=""
                role={'presentation'}
                className={styles.sidebar__logo}
            />
            <div>
                <Input 
                    placeholder="Search"
                    icon={<SearchIcon />}
                />
            </div>
            <div className={styles.navigation__container}>
                { navigationItems.map((item, index) => {
                    return (
                        <NavigationItem key={`nav-item-${item.text}`}
                            action={item.action}
                            icon={item.icon}
                            text={item.text}
                        />
                    )
                })}
            </div>
            <div className={styles.navigation__container}>
                { navigationFooterItems.map((item, index) => {
                    return (
                        <NavigationItem key={`nav-item-${item.text}`}
                            action={item.action}
                            icon={item.icon}
                            text={item.text}
                        />
                    )
                })}
            </div>
            <div className={styles.new__feature__container}>
                <div>
                    <p className={styles.new__feature__title}>New features available!</p>
                    <p className={styles.new__feature__subtext}>Check out the new dashboard view. Pages now load faster. </p>
                </div>
                <div className={styles.new__feature__image__container}>
                    <Image 
                        src={'images/nav-featured-card-image.svg'}
                        height={136}
                        width={215}
                        alt=""
                        role={'img'}
                        className={styles.new__feature__image}
                    />
                    <button className={styles.new__feature__image__play__button}>
                        <PlayIcon />
                    </button>
                </div>
                <div className={styles.new__feature__action__container}>
                    <button 
                        type='button'
                        className={styles.new__feature__dismiss__action}
                    >Dismiss</button>
                    <button 
                        type='button'
                        className={styles.new__feature__positive__action}
                    >What&apos;s new?</button>
                </div>
            </div>
            <Divider
                direction={'horizontal'}
            />
            <div className={styles.account__container}>
                <Image 
                    height={40}
                    width={40}
                    src={'images/account-avatar.svg'}
                    alt="user avatar"
                    role={'presentation'}
                    className={styles.account__avatar}
                />
                <div className={styles.account__details}>
                    <p className={styles.account__name}>Olivia Rhye</p>
                    <p className={styles.account__email}>olivia@untitledui.com</p>
                </div>
                <button className={styles.account__logout}>
                    <LogooutIcon />
                </button>
            </div>
        </div>
    )
}

export default Sidebar;