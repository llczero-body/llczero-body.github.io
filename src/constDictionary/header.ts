
// 顶部导航列表项的接口定义
interface NavigationItem {
    value: string;
    label: string;
    index: number;
}

// 顶部导航列表
const TOP_NAVIGATION_LIST: NavigationItem[] = [
    {
        value: 'home',
        label: '主页',
        index: 0,
    },
    {
        value: 'blog',
        label: '博客',
        index: 1,
    },
    {
        value: 'dynamic',
        label: '动态',
        index: 2,
    },
    {
        value: 'link',
        label: '友链',
        index: 3,
    },
];

export {
    TOP_NAVIGATION_LIST,
};