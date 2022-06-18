import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './Title.module.css';

interface TitleProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'white' | 'black';
  children: string;
}

const cx = classNames.bind(classes);

const Title: FC<TitleProps> = ({ size = 3, color = 'white', children }) => {
  return (
    <p className={cx('text-4xl font-medium', `title-${color}`, `title-size-${size}`)}>
      {children}
    </p>
  );
};

export default Title;
