import { PageWrapper } from 'Components/Common/PageWrapper';

import { Content } from 'Components/Main/Content/Content';

import React, { useEffect } from 'react';
export const Main = () => {
  console.log('main');

  useEffect(() => {
    console.log('Main MOUNT');

    return () => console.log('Main UNMOUNT');
  }, []);
  return (
    <PageWrapper>
      <Content />
    </PageWrapper>
  );
};
