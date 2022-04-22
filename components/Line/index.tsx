import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { LineProps } from './interface';

const Line: FC<LineProps> = () => {
    return <div className={classnames(style.line)}>line</div>;
};

export default Line;
