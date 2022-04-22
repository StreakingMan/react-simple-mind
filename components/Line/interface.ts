import { CSSProperties } from 'react';

export interface LineProps {
    className?: string;
    width?: number;
    color?: string;
    position: 'left' | 'right';
    itemHeightList: number[];
    rowGap: number;
    colGap: number;
    regionHeight: number;
    style?: CSSProperties;
}
