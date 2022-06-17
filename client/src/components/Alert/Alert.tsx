import React from 'react';
import classNames from 'classnames/bind';
import classes from './Alert.module.css';
import { When } from 'react-if';
import { IoIosClose } from 'react-icons/io';

interface AlertProps extends React.PropsWithChildren<unknown> {
  title: string;
  variant?: 'default' | 'success' | 'warn' | 'error';
  className?: string;
  onCloseButtonClick?: VoidFunction;
  closeButton?: boolean;
}

const cx = classNames.bind(classes);

const Alert: React.FC<AlertProps> = ({
  title,
  variant = 'default',
  className,
  onCloseButtonClick: onClose,
  closeButton: close = false,
  children,
}) => {
  const handleClose = () => {
    if (onClose) onClose();
  };

  console.log(classes);

  return (
    <div className={cx('alert-wrapper', `alert-wrapper-${variant}`, className)} role='alert'>
      <p className={cx('alert-title', `alert-title-${variant}`)}>{title}</p>
      <When condition={close}>
        <IoIosClose
          className={cx('alert-close-btn', `alert-close-btn-${variant}`)}
          onClick={handleClose}
        />
      </When>
      {children}
    </div>
  );
};

export default Alert;
