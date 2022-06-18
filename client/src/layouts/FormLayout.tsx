import React from 'react';

const FormLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-800 via-violet-700 to-purple-600'>
      {children}
    </div>
  );
};

export default FormLayout;
