import type { FC, PropsWithChildren, ElementType, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import classes from './Button.module.css';

interface ButtonProps {
  to?: string;
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

const cx = classNames.bind(classes);

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  to,
  href,
  fullWidth = false,
  disabled = false,
  children,
  onClick,
}) => {
  let ButtonComp: ElementType = 'button';
  const props: ButtonProps = {
    onClick,
    disabled,
  };

  if (to) {
    props.to = to;
    ButtonComp = Link;
  } else if (href) {
    props.href = href;
    ButtonComp = 'a';
  }

  return (
    <ButtonComp
      className={cx('btn', fullWidth && 'w-full', disabled ? 'btn-disabled' : 'btn-default')}
      {...props}
    >
      {children}
    </ButtonComp>
  );
};

export default Button;
