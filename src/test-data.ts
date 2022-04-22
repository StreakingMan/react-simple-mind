import { SimpleMindProps } from '../components/SimpleMind/interface';

export const testData: SimpleMindProps['data'] = {
    title: 'root',
    children: [
        {
            title: 'element1',
            children: [
                { title: 'element1-1' },
                {
                    title: 'element1-2',
                    children: [
                        { title: 'element1-2-1', url: 'https://baidu.com' },
                        { title: 'element1-2-2' },
                    ],
                },
                {
                    title: 'element1-3',
                    children: [
                        { title: 'element1-3-1', url: 'https://baidu.com' },
                        { title: 'element1-3-2' },
                    ],
                },
                { title: 'element1-4' },
            ],
        },
        { title: 'element2' },
        { title: 'element3' },
        { title: 'element4' },
    ],
};
