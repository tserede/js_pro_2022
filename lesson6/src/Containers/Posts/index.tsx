import { PageWrapper } from 'Components/Common/PageWrapper';
import { PostsList } from 'Components/Posts';
import React, { useEffect } from 'react';

export const Posts = () => {
  useEffect(() => {
    const handler = () => console.log('click on post page');
    document.addEventListener('click', handler);

    console.log('Posts MOUNT');

    return () => {
      console.log('Posts UNMOUNT');
      document.removeEventListener('click', handler);
    };
  }, []);
  return (
    <PageWrapper>
      <PostsList />
    </PageWrapper>
  );
};
