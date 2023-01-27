import React, { useEffect, useState } from 'react';
import style from './Content.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CounterComponent } from 'Components/Common/CounterComponent';
export const Content = () => {
  const navigate = useNavigate();

  const [label, setLabel] = useState('LABEL');

  console.log('main content');

  // const handler = () => console.log(`current label=${label}`);
  // useEffect(() => {
  //   document.addEventListener('click', handler);

  //   return () => {
  //     document.removeEventListener('click', handler);
  //   };
  // }, [label]);
  useEffect(() => {
    console.log('MainContent UPDATE');
  //   return () => console.log('MainContent WILL_UPDATE');
  }, [label]);

  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + '_UP')}>
        set label
      </button>
      <div>
        <CounterComponent title={label} />
        <CounterComponent title="Orange" />
      </div>
      <div className={style.btn_group}>
        <button type="button" onClick={() => navigate(-1)}>
          go to back
        </button>
        <button type="button" onClick={() => navigate(1)}>
          go next
        </button>
      </div>
    </main>
  );
};
