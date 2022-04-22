import React, { FC, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { LineProps } from './interface';

const Line: FC<LineProps> = ({
    color = 'black',
    width = 1,
    position,
    itemHeightList,
    rowGap,
    colGap,
    regionHeight,
    style: customStyle,
}) => {
    const regionRef = useRef<HTMLDivElement>(null);
    const [regionWidth, setRegionWidth] = useState(0);
    const [startPoint, setStartPoint] = useState('0 0');
    const [startCtrlPoint, setStartCtrlPoint] = useState('0 0');
    const [endPoints, setEndPoints] = useState([['0 0', '0 0']]);

    useEffect(() => {
        setStartCtrlPoint(`${regionWidth / 2} ${regionHeight / 2}`);
        const eps: string[][] = [];
        if (position === 'left') {
            setStartPoint(`${regionWidth} ${regionHeight / 2}`);
            let temp = 0;
            itemHeightList.forEach((height, index) => {
                const y = height / 2 + temp;
                eps.push([`${regionWidth / 2} ${y}`, `0 ${y}`]);
                temp += height;
                if (index !== itemHeightList.length - 1) {
                    temp += colGap;
                }
            });
        } else {
            setStartPoint(`0 ${regionHeight / 2}`);
            let temp = 0;
            itemHeightList.forEach((height, index) => {
                const y = height / 2 + temp;
                eps.push([`${regionWidth / 2} ${y}`, `${regionWidth} ${y}`]);
                temp += height;
                if (index !== itemHeightList.length - 1) {
                    temp += colGap;
                }
            });
        }
        setEndPoints(eps);
    }, [regionWidth, regionHeight]);

    useEffect(() => {
        const region = regionRef.current;

        if (!region) return;
        const { width } = region.getBoundingClientRect();

        setRegionWidth(width);

        const resizeObserver = new ResizeObserver(() => {
            const { width } = region.getBoundingClientRect();
            setRegionWidth(width);
        });
        resizeObserver.observe(region);
        return () => {
            resizeObserver.unobserve(region);
        };
    }, [regionRef.current]);

    return (
        <div
            ref={regionRef}
            style={{ ...customStyle, width: rowGap, height: regionHeight }}
            className={classnames(style.line)}
        >
            <svg
                width={regionWidth}
                height={regionHeight}
                viewBox={`0 0 ${regionWidth} ${regionHeight}`}
            >
                {endPoints.map(([endCtrlPoint, endPoint], idx) => (
                    <path
                        key={idx}
                        d={`M${startPoint} C ${startCtrlPoint}, ${endCtrlPoint}, ${endPoint}`}
                        stroke={color}
                        strokeWidth={width}
                        fill={'none'}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Line;
