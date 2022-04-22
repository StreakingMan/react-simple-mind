import { SimpleMindProps } from '../SimpleMind/interface';

export interface ElementProps {
    className?: string;
    data: SimpleMindProps['data'];
    position: 'left' | 'right';
}
