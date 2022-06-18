import type { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import classname from 'classnames/bind';
import classes from './Input.module.css';
import { When } from 'react-if';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const cx = classname.bind(classes);

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = false, errorMessage, children, ...inputProps },
  ref
) => {
  return (
    <div className={cx('relative z-0 w-full', !errorMessage ? 'mb-6' : 'mb-2')}>
      <input
        className={cx('peer', 'input', !error ? 'input-default' : 'input-error')}
        ref={ref}
        placeholder={`Enter ${label}...`}
        spellCheck={false}
        {...inputProps}
      />
      <label className={cx('label', !error ? 'label-default' : 'label-error')}>{label}</label>
      <When condition={error && errorMessage}>
        <p className='mt-2 text-sm text-red-500'>{errorMessage}</p>
      </When>
    </div>
  );
};

export default forwardRef(Input);
