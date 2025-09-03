
// 顶部导航列表项的接口定义
interface ContentListItem {
    value: string;
    label: string;
    index: number;
    color: string;
}

// 顶部导航列表
const CONTENTLIST: ContentListItem[] = [

    {
        value: 'js',
        label: 'JS',
        index: 0,
        color: '#E3F2FD',
    },
    {
        value: 'css',
        label: 'Css',
        index: 1,
        color: '#E8F5E9',
    },
    {
        value: 'html',
        label: 'HTML',
        index: 2,
        color: '#FFF8E1',
    },
    {
        value: 'vue',
        label: 'Vue',
        index: 3,
        color: '#E0F7FA',
    },
    {
        value: 'network',
        label: '网络',
        index: 4,
        color: '#F1F8E9',
    },
    {
        value: 'ui',
        label: 'ui框架',
        index: 5,
        color: '#FFF3E0',
    },
    {
        value: 'ui',
        label: 'ui框架',
        index: 5,
        color: '#E8EAF6',
    },
];

export {
    CONTENTLIST,
};