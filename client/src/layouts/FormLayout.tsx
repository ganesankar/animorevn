import React from 'react';

const FormLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-gradient-to-tr from-blue-800 to-indigo-600'>
      {children}
    </div>
  );
};

export default FormLayout;
