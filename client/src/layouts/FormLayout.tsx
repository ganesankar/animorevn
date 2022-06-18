import React from 'react';

const FormLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='flex h-full w-full items-center justify-center'>{children}</div>;
};

export default FormLayout;
