import type { FC } from 'react';
import { When } from 'react-if';

interface DividerProps {
  label?: string;
}

const Divider: FC<DividerProps> = ({ label }) => {
  return (
    <div
      className='relative flex w-full items-center before:flex-grow before:border-t
    before:border-gray-300 after:flex-grow after:border-t after:border-gray-300'
    >
      <When condition={label}>
        <span className='mx-4 flex-shrink text-gray-700'>{label}</span>
      </When>
    </div>
  );
};

export default Divider;
