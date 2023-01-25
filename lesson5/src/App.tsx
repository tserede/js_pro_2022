import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFound';
import { Auth } from 'Components/Auth/Auth';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.auth} element={<Auth />} />
    </Routes>
  );
}

export default App;
