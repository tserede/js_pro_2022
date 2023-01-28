import React, { ChangeEvent, useEffect, useState } from 'react';
import { routes } from 'Helpers/Constants/routes';
import style from './AuthForm.module.scss';
import { Input } from 'Components/input';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('Пароль слишком короткий');
    } else {
      setErrorMessage('');
      console.log(formState, 'Отправлено на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5) {
      setErrorMessage('Пароль слишком короткий');
    } else setErrorMessage('');
  }, [formState.password]);

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };
  return (
    <div className={style.wrapper}>
      <h1>AUTH FORM</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
        <Input
          name={'Password'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        />
      </div>
      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
      <button type="button" onClick={submitHandler}>
        AUTH
      </button>
    </div>
  );
};
