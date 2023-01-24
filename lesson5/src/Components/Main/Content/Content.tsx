import React from 'react';
import style from './Content.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
export const Content = () => {
  const navigate = useNavigate();

  const lacation = useLocation();
  console.log(location);
  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(routes.posts)}>
        push me
      </button>
    </main>
  );
};
