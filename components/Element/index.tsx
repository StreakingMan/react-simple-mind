import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { ElementProps } from './interface';

const Element: FC<ElementProps> = () => {
    return <div className={classnames(style.element)}>element</div>;
};

export default Element;
