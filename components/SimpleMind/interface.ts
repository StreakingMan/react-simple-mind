interface Data {
    title: string;
    url?: string;
    children?: Data[];
}

export interface SimpleMindProps {
    data: Data;
    className?: string;
    elementClassName?: string;
    layout?: 'singleSide' | 'doubleSide';
    gap?: number | number[];
    lineColor?: string;
    lineWidth?: number;
}
