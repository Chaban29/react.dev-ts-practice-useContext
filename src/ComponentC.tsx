import { FC, useContext } from 'react';
import { ComponentD } from './ComponentD';
import { textContext } from './textContext';

export const ComponentC: FC = () => {
  const text = useContext(textContext);
  return (
    <div className='box'>
      Component C<p>{'Hello again ' + text}</p>
      <ComponentD />
    </div>
  );
};
