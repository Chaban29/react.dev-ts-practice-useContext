import { FC } from 'react';
import { ComponentC } from './ComponentC';

export const ComponentB: FC = () => {
  return (
    <div className='box'>
      Component B
      <ComponentC />
    </div>
  );
};
