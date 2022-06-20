import type { FC, PropsWithChildren } from 'react';
import { useState, useEffect } from 'react';
import { useAppSelector } from '~/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { If, Then, Else } from 'react-if';

const authPaths = ['/login', '/register'];
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { currentUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentUser) {
      if (!authPaths.includes(pathname)) navigate('/login');
      return setIsLoaded(true);
    }

    if (authPaths.includes(pathname)) navigate('/');

    setIsLoaded(true);
  }, [currentUser, pathname]); // eslint-disable-line

  return (
    <If condition={isLoaded}>
      <Then>{children}</Then>
      <Else>
        <h1>Loading</h1>
      </Else>
    </If>
  );
};

export default AuthProvider;
