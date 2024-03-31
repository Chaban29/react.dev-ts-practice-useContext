import { FC, useContext } from 'react';
import { textContext } from './textContext';

export const ComponentD: FC = () => {
  const text = useContext(textContext);
  return <div className='box'>Component D {`Goodbye ${text}`}</div>;
};
