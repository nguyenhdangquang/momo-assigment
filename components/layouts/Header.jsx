import Image from 'next/image';

import classes from './Layouts.module.scss';

const menus = [
    {
        key: 1,
        value: 'Blog'
    },
    {
        key: 2,
        value: 'Socials'
    },
    {
        key: 3,
        value: 'Past Socials'
    },
    {
        key: 4,
        value: 'Clubs'
    },
    {
        key: 5,
        value: 'Contact'
    }
]

export const Header = () => {
    return (
        <div className={classes['header-container']}>
            <div className={classes['logo-wrapper']}>
                <img
                    src={`/images/logo.svg`}
                    alt="logo-supermomos"
                    className={classes['logo']}
                />
            </div>
           <div className={classes['menu-wrapper']}>
               {menus.map(menu => {
                   return <p key={menu.key} className={classes['menu-item']}>{menu.value}</p>
               })}
           </div>
        </div>
    )
}
