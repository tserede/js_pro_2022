import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import style from './Reg.module.scss';

export const RegPage = () => {
  return (
    <main className={style.wrapper}>
      <h1>Регистрация</h1>
      <p>Пожалуйста, зарегистрируйтесь</p>
      <p>Логин</p>
      <input></input>
      <p>Пароль</p>
      <input></input>
      <button>Войти</button>
    </main>
  );
};
