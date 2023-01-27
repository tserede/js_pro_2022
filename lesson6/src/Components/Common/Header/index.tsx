import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
export const Header = () => {
  return (
    <header className={style.wrapper}>
      <img className={style.wrapper_logo} src="/logo512.png" />
      <nav className={style.wrapper_nav}>
        <ul>
          <li>
            <Link to={routes.main}>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to={routes.posts}>ПОСТЫ</Link>
          </li>
          <li>
            <Link to={routes.about}>О НАС</Link>
          </li>
        </ul>
      </nav>
      <div className={style.wrapper_auth}>
      <span ><Link to={routes.reg}>Регистрация </Link></span><span>/</span><span><Link to={routes.auth}>Вход</Link></span>
      </div>
      <span className={style.wrapper_title}>REACT_LEARN</span>
    </header>
  );
};
