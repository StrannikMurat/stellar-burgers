import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

const setActive = ({ isActive }: NavLinkRenderProps) =>
  `${styles.link} ${isActive ? styles.link_active : ''}`;

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <>
          <BurgerIcon type={'primary'} />
          <NavLink to='/' className={setActive}>
            <p className='text text_type_main-default ml-2 mr-10'>
              Конструктор
            </p>
          </NavLink>
        </>
        <>
          <ListIcon type={'primary'} />
          <NavLink to='feed' className={setActive}>
            <p className='text text_type_main-default ml-2'> Лента заказов </p>
          </NavLink>
        </>
      </div>
      <div className={styles.logo}>
        <Logo className='' />
      </div>
      <div className={styles.link_position_last} data-cy='userCabinet'>
        <ProfileIcon type={'primary'} />
        <NavLink to={userName ? 'profile' : 'login'} className={setActive}>
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}{' '}
          </p>
        </NavLink>
      </div>
    </nav>
  </header>
);
