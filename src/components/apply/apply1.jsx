import React from 'react';
import DefaultApply from './default-apply';
import './style-apply-v1.scss';

const applyOne = () => (
    <div className="version-1 layout-section">
        <button className="button" type="button">
            hello button
        </button>
        <DefaultApply />
    </div>
);

export default applyOne;
