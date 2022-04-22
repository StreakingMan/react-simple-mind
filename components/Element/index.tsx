import React, { FC, useState } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { ElementProps } from './interface';
import { LinkIcon, ToggleIcon } from '../icons';

const Element: FC<ElementProps> = ({ data, position, className }) => {
    const [closed, setClosed] = useState<boolean>(false);
    return (
        <div className={classnames(style.element, style[position])}>
            <div
                className={classnames(
                    style.title,
                    className,
                    closed && style.closed
                )}
                style={{
                    cursor: data.url ? 'pointer' : 'default',
                }}
                onClick={() => data.url && window.open(data.url, '_blank')}
            >
                {data.url && position === 'left' && LinkIcon}
                {data.title}
                {!!data.children?.length && (
                    <div
                        className={style.toggle}
                        onClick={(e) => {
                            e.stopPropagation();
                            setClosed(!closed);
                        }}
                    >
                        {ToggleIcon(closed)}
                    </div>
                )}
                {data.url && position === 'right' && LinkIcon}
            </div>
            {!!data.children?.length && !closed && (
                <div className={classnames(style.list)}>
                    {data.children.map((ele, idx) => (
                        <Element
                            key={idx}
                            data={ele}
                            className={className}
                            position={position}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Element;
