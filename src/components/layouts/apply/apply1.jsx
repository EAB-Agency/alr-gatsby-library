import React from 'react';
import DefaultApply from './default-apply'
import './style-apply-v1.scss';

const applyOne = () => {
  return (
    <div className="version-1">
      <button className="button">hello button</button>
        <DefaultApply />
    </div>
  );
};

export default applyOne;
