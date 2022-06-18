import type { FC, PropsWithChildren } from 'react';

const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return <div className='text-md text-center text-inherit'>{children}</div>;
};

export default Paragraph;
