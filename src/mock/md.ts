// 预先导入所有 Markdown 组件
import md1 from '@/md/原型和原型链深入理解.md'
import md2 from '@/md/执行栈和执行上下文.md'
import md3 from '@/md/作用域和作用域链.md'
let mdList: any[] = [
    {
        title: '原型和原型链深入理解',
        content: '之所以选择基于原型的面向对象的系统，是因为一开始开发的时候布兰登·艾奇（Brendan Eich）没有打算在JavaScript这门语言当中加入类的概念，因为JavaScript的初衷就是为非专业的开发人员提供一个方便的工具，所以在开发JavaScript的时候也是尽可能的简单，易学 ',
        img: '@/assets/bigPicture/md10-1.png',
        label: 0,
        id: 10,
        component:md1
    },
    {
        title: '执行栈和执行上下文',
        content: 'javaScript的时候，该环境下会创建一个执行上下文，会确定代码的作用域，创建局部变量对象等等',
        img: '',
        label: 0,
        id: 20,
        component:md2
    },
    {
        title: '作用域和作用域链',
        content: '作用域是代码运行时此环境下可以访问的变量，函数和对象的可访问性 单来说就是作用域决定了当前环境下的资源是否可以被使用和引用',
        img: '',
        label: 0,
        id: 30,
        component:md3
    },
    {
        title: 'VUE的diff算法',
        content: '当组件创建和更新时，vue均会执行内部的update函数，该函数使用render函数生成的虚拟dom树，将新旧两树进行对比，找到差异点，最终更新到真实dom,对比差异的过程叫diff，vue在内部通过一个叫patch的函数完成该过程',
        img: '',
        label: 3,
        id: 40,
        component:md3
    },
]
export default mdList