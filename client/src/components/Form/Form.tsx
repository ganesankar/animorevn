import type { FC, FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  width?: string;
}

const Form: FC<FormProps> = ({ width, children, ...props }) => {
  return (
    <form
      className='flex h-auto flex-col items-center gap-3 rounded bg-gray-100 p-5 text-gray-700 shadow-lg'
      style={{ width: `min(${width ?? '25rem'}, 95%` }}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
