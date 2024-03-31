import { FC, useState } from 'react';
import './index.css';
import { ComponentA } from './ComponentA';

export const App: FC = () => {
  const [text, setText] = useState<string>('Roman Chaban');
  const handleUserShow = () => {
    setText(`Hello dear ${text}`);
  };
  return (
    <>
      <ComponentA text={text} onShow={handleUserShow} />
    </>
  );
};
