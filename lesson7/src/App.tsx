import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFound';
import { Auth } from 'Containers/Auth';
import { Reg } from 'Containers/Reg';
import { About } from 'Containers/About';

function App() {
  useEffect(() => {
    console.log('APP MOUNT');
  }, []);
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.auth} element={<Auth />} />
      <Route path={routes.reg} element={<Reg />} />
      <Route path={routes.about} element={<About />} />
    </Routes>
  );
}

export default App;
