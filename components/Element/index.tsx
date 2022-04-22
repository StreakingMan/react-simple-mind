import React, { FC, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { ElementProps } from './interface';
import { LinkIcon, ToggleIcon } from '../icons';
import Line from '../Line';

const Element: FC<ElementProps> = ({
    data,
    position,
    className,
    rowGap,
    colGap,
}) => {
    const [closed, setClosed] = useState<boolean>(false);
    const listRef = useRef<HTMLDivElement>(null);
    const [itemHeightList, setItemHeightList] = useState<number[]>([]);
    const [regionHeight, setRegionHeight] = useState<number>(0);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;
        const updateHeight = () => {
            const heightList: number[] = [];
            let i = 0;
            while (i < list.children.length) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                heightList.push(list.children.item(i).scrollHeight);
                i++;
            }
            setItemHeightList(heightList);
            setRegionHeight(list.scrollHeight);
        };
        updateHeight();
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
        resizeObserver.observe(list);
        return () => {
            resizeObserver.unobserve(list);
        };
    }, [listRef.current]);

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
                <>
                    <Line
                        regionHeight={regionHeight}
                        itemHeightList={itemHeightList}
                        position={position}
                        rowGap={rowGap}
                        colGap={colGap}
                    />
                    <div
                        ref={listRef}
                        className={classnames(style.list)}
                        style={{ gap: colGap }}
                    >
                        {data.children.map((ele, idx) => (
                            <Element
                                key={idx}
                                data={ele}
                                className={className}
                                position={position}
                                rowGap={rowGap}
                                colGap={colGap}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Element;
