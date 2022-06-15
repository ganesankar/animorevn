import type { FC, PropsWithChildren } from 'react';
import './GlobalStyles.css';

const GlobalStyles: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyles;
