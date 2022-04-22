interface Data {
    title: string;
    url?: string;
    children?: Data[];
}

export interface SimpleMindProps {
    data: Data;
    elementClassName?: string;
}
