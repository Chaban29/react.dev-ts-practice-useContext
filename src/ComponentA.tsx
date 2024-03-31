import { FC } from 'react';
import { ComponentB } from './ComponentB';
import { textContext } from './textContext';

interface IComponentA {
  text: string;
  onShow: () => void;
}

export const ComponentA: FC<IComponentA> = ({ text }: IComponentA) => {
  return (
    <div className='box'>
      Component A<p>{`Hello ${text}`}</p>
      <textContext.Provider value={text}>
        <ComponentB />
      </textContext.Provider>
    </div>
  );
};
