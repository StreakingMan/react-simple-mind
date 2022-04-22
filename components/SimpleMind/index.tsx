import React, { FC, useEffect, useRef, useState } from 'react';
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
    const rightRef = useRef<HTMLDivElement>(null);
    const [rightHeightList, setRightHeightList] = useState<number[]>([]);
    const [rightRegionHeight, setRightRegionHeight] = useState<number>(0);
    const leftRef = useRef<HTMLDivElement>(null);
    const [leftHeightList, setLeftHeightList] = useState<number[]>([]);
    const [leftRegionHeight, setLeftRegionHeight] = useState<number>(0);

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

    let rowGap = 48,
        colGap = 24;
    if (Array.isArray(gap)) {
        rowGap = gap[0] ?? 24;
        colGap = gap[1] ?? 24;
    } else if (gap) {
        rowGap = gap;
        colGap = gap;
    }

    useEffect(() => {
        const right = rightRef.current;
        if (!right) return;
        const updateHeight = () => {
            const heightList: number[] = [];
            let i = 0;
            while (i < right.children.length) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                heightList.push(right.children.item(i).scrollHeight);
                i++;
            }
            setRightHeightList(heightList);
            setRightRegionHeight(right.scrollHeight);
        };
        updateHeight();
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
        resizeObserver.observe(right);
        return () => {
            resizeObserver.unobserve(right);
        };
    }, [leftRef.current, rightRef.current]);

    useEffect(() => {
        const left = leftRef.current;
        if (!left) return;
        const updateHeight = () => {
            const heightList: number[] = [];
            let i = 0;
            while (i < left.children.length) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                heightList.push(left.children.item(i).scrollHeight);
                i++;
            }
            setLeftHeightList(heightList);
            setLeftRegionHeight(left.scrollHeight);
        };
        updateHeight();
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
        resizeObserver.observe(left);
        return () => {
            resizeObserver.unobserve(left);
        };
    }, [leftRef.current]);

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
            <div className={style.elementLayer}>
                {!!leftElements.length && (
                    <>
                        <div
                            ref={leftRef}
                            className={classnames(
                                style.listContainer,
                                style.left
                            )}
                        >
                            {leftElements.map((ele, idx) => (
                                <Element
                                    key={`left${idx}`}
                                    position={'left'}
                                    data={ele}
                                    className={elementClassName}
                                    rowGap={rowGap}
                                    colGap={colGap}
                                />
                            ))}
                        </div>
                        <Line
                            regionHeight={leftRegionHeight}
                            itemHeightList={leftHeightList}
                            position={'left'}
                            rowGap={rowGap}
                            colGap={colGap}
                        />
                    </>
                )}

                <div className={classnames(elementClassName, style.root)}>
                    {data.title}
                </div>

                {!!rightElements.length && (
                    <>
                        <Line
                            regionHeight={rightRegionHeight}
                            itemHeightList={rightHeightList}
                            position={'right'}
                            rowGap={rowGap}
                            colGap={colGap}
                        />
                        <div
                            ref={rightRef}
                            className={classnames(
                                style.listContainer,
                                style.right
                            )}
                        >
                            {rightElements.map((ele, idx) => (
                                <Element
                                    key={`right${idx}`}
                                    position={'right'}
                                    data={ele}
                                    className={elementClassName}
                                    rowGap={rowGap}
                                    colGap={colGap}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SimpleMind;
