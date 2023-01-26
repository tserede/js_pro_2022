import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import style from './Auth.module.scss';

export const AuthPage = () => {
  return (
    <main className={style.wrapper}>
      <h1>Авторизация</h1>
      <p>Пожалуйста, авторизуйтесь</p>
      <p>Логин</p>
      <input></input>
      <p>Пароль</p>
      <input></input>
      <button>Войти</button>
    </main>
  );
};
