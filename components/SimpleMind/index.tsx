import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { SimpleMindProps } from './interface';
import Element from '../Element';
import Line from '../Line';

const SimpleMind: FC<SimpleMindProps> = ({
    data,
    layout = 'doubleSide',
    elementClassName,
    className,
    gap,
}) => {
    const allElements = data.children || [];
    const leftElements: SimpleMindProps['data'][] = [];
    const rightElements: SimpleMindProps['data'][] = [];

    if (layout === 'singleSide') {
        // 单边布局
        rightElements.push(...allElements);
    } else {
        // 双边布局
        if (allElements.length > 3) {
            leftElements.push(...allElements.slice(0, allElements.length / 2));
            rightElements.push(...allElements.slice(allElements.length / 2));
        } else {
            rightElements.push(...allElements);
        }
    }

    let rowGap = 24,
        colGap = 24;
    if (Array.isArray(gap)) {
        rowGap = gap[0] ?? 24;
        colGap = gap[1] ?? 24;
    } else if (gap) {
        rowGap = gap;
        colGap = gap;
    }

    return (
        <div
            style={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                '--row-gap': `${rowGap}px`,
                '--col-gap': `${colGap}px`,
            }}
            className={classnames(style.simpleMind, className)}
        >
            <div className={style.lineLayer}>
                <Line />
            </div>

            <div className={style.elementLayer}>
                {!!leftElements.length && (
                    <div
                        className={classnames(style.listContainer, style.left)}
                    >
                        {leftElements.map((ele, idx) => (
                            <Element
                                key={`left${idx}`}
                                position={'left'}
                                data={ele}
                                className={elementClassName}
                            />
                        ))}
                    </div>
                )}

                <div className={classnames(elementClassName)}>{data.title}</div>

                {!!rightElements.length && (
                    <div
                        className={classnames(style.listContainer, style.right)}
                    >
                        {rightElements.map((ele, idx) => (
                            <Element
                                key={`right${idx}`}
                                position={'right'}
                                data={ele}
                                className={elementClassName}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleMind;
