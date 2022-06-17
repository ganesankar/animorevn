import React from 'react';

const DefaultLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
