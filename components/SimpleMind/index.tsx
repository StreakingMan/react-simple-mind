import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { SimpleMindProps } from './interface';

const SimpleMind: FC<SimpleMindProps> = ({ data }) => {
    return <div className={classnames(style.simpleMind)}>{data.title}</div>;
};

export default SimpleMind;
