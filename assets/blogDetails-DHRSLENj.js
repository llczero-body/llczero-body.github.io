import{_ as m}from"./md10-1-CyG7R5tX.js";import{d as r,f as j,m as h,o as c,e as a,b as l,w as p,a as d,j as t,r as b,n as f,p as y,q as v,c as k,t as w,u as _,l as q,h as x}from"./index-CGUGFArJ.js";const S="/assets/md10-2-Bxz4PI1P.jpeg",P="/assets/md10-3-BSNMcDbZ.jpeg",O="/assets/md10-4-Cb3m54RX.jpeg",B={class:"markdown-body"},C=r({__name:"原型和原型链深入理解",setup(i,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(o,s)=>(c(),j("div",B,[...s[0]||(s[0]=[h(`<h3>1，原型和原型链介绍</h3><blockquote><p>在设计 JavaScript 语言的时候，借鉴了 self 和 smalltalk 这两门基于原型的语言</p></blockquote><p><strong>JavaScript 是一门基于原型语言，对象的产生是通过原型对象而来</strong></p><p>之所以选择基于原型的面向对象的系统，是因为一开始开发的时候<a href="https://baike.baidu.com/item/%E5%B8%83%E5%85%B0%E7%99%BB%C2%B7%E8%89%BE%E5%A5%87/58101949?fromtitle=Brendan%20Eich&amp;fromid=561441&amp;fr=aladdin">布兰登·艾奇（Brendan Eich）</a>没有打算在 JavaScript 这门语言当中加入类的概念，因为 JavaScript 的初衷就是为非专业的开发人员提供一个方便的工具，所以在开发 JavaScript 的时候也是尽可能的简单，易学</p><h3>2，初始原型链，原型</h3><p>ES5 中提供了一个方法可以用来克隆对象</p><pre class="hljs"><code class=""> <span class="hljs-keyword">const</span> obj1 = {
    <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>,
    <span class="hljs-attr">identity</span>:<span class="hljs-string">&quot;student&quot;</span>,
   	<span class="hljs-title function_">smoke</span>(<span class="hljs-params"></span>) {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;I like smoke&quot;</span>)
    }
<span class="hljs-keyword">const</span> obj2 = <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">create</span>(obj1);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj1.<span class="hljs-property">age</span>);  <span class="hljs-comment">// 18</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2.<span class="hljs-property">age</span>);  <span class="hljs-comment">// 18</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2.<span class="hljs-property">__proto__</span> === obj1 ) <span class="hljs-comment">// true;</span>
</code></pre><p>在这个示例中我们创建了一个名为 obj1 的对象，通过 Object.create 的方法进行克隆出 obj2， 所以这个时候 obj1 就是 obj2 的原型对象， obj1 上的方法和属性，obj2 上都有且可以使用</p><pre class="hljs"><code class=""> <span class="hljs-keyword">const</span> obj1 = {
        <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>,
        <span class="hljs-attr">identity</span>:<span class="hljs-string">&quot;student&quot;</span>
      }
<span class="hljs-keyword">const</span> obj2 = <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">create</span>(obj1,{
        <span class="hljs-attr">name1</span>: {
            <span class="hljs-attr">value</span>:<span class="hljs-string">&#39;obj2&#39;</span>,
            <span class="hljs-attr">enumerable</span>:<span class="hljs-literal">true</span>,
        },
        smoke{
            <span class="hljs-attr">value</span>:<span class="hljs-string">&#39;&#39;</span>,
            <span class="hljs-attr">enumerable</span>:<span class="hljs-literal">true</span>,
        });

<span class="hljs-keyword">const</span> obj3 = <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">create</span>(obj2,{
          <span class="hljs-attr">name2</span>: {
              <span class="hljs-attr">value</span>:<span class="hljs-string">&#39;obj3&#39;</span>,
              <span class="hljs-attr">enumerable</span>:<span class="hljs-literal">true</span>,
              }
          });
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj3.<span class="hljs-property">age</span>);  <span class="hljs-comment">// 18</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj3.<span class="hljs-property">name1</span>);  <span class="hljs-comment">// obj2</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj3.<span class="hljs-property">name2</span>);  <span class="hljs-comment">// obj3</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2.<span class="hljs-property">__proto__</span> === obj1 ) <span class="hljs-comment">// true;</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj3.<span class="hljs-property">__proto__</span> === obj2 ) <span class="hljs-comment">// true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj3)  <span class="hljs-comment">// {name:&#39;obj3&#39;}</span>

</code></pre><h5>总结</h5><p>现在我们又通过 Object.create 的方法进行克隆出 obj3，这个 obj3 上有自己本身的属性，也有 obj2 和 obj1 的属性，</p><p>当查找一个对象的属性的时候，如果该对象上没有这个属性，则会去该对象上面的原型对象进行查找，如果原型对象上还没有，那么会去找这个原型对象上的原型对象进行查找，他们统一都通过一种链条式的关系连接了起来，这就是**原型链 **</p><p><img src="`+m+`" alt="画板"></p><p>这就是 JavaScript 里面最原始的创建对象的方式，新的对象是通过克隆另外一个对象得到的，被克隆的对象就是新对象的对象原型</p><h3>3，通过构造函数深挖原型关系</h3><p>但是这种创造的方式还是太过于麻烦，于是借鉴于 java, C#等面向对象的语言开发者开发了构造函数来进行批量的生成对象</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">People</span>(<span class="hljs-params">name, age, sex</span>) {
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span> = name;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">age</span> = age;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">sex</span> = sex;
}

<span class="hljs-title class_">People</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">smoke</span> = <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span> + <span class="hljs-string">&quot;喜欢抽烟&quot;</span>);
};

<span class="hljs-keyword">let</span> zhangsan = <span class="hljs-keyword">new</span> <span class="hljs-title class_">People</span>(<span class="hljs-string">&quot;张三&quot;</span>, <span class="hljs-number">18</span>, <span class="hljs-string">&quot;男&quot;</span>);
<span class="hljs-keyword">let</span> lisi = <span class="hljs-keyword">new</span> <span class="hljs-title class_">People</span>(<span class="hljs-string">&quot;李四&quot;</span>, <span class="hljs-number">28</span>, <span class="hljs-string">&quot;男&quot;</span>);
</code></pre><blockquote><p>虽然这种方式可以批量的进行对象的创建，但是在 js 的底层还是基于原型来创建的对象</p></blockquote><p>通过构造函数传递属性 new 了两个对象，分别放在 zhangsan 和 lisi 两个变量中，但是 People 构造函数构造实例方法时却是挂载在了 People.prototype，这个<strong>prototype</strong>是什么呢？为什么要放到<strong>prototype</strong>中呢？</p><blockquote><p><strong>People.prototype</strong>其实就是 people 的实例的原型对象</p></blockquote><p><img src="`+S+`" alt="画板"></p><p>其实从上面的图我们也可以得出结论</p><h5>得出结论</h5><ul><li>javaScript 中的每一个对象都有原型，可以通过<strong>proto</strong>进行访问这个对象的原型对象</li><li>构造函数的 prototype 属性指向的是一个原型对象，这个是构造函数实例化出来的对象的原型对象</li><li>原型对象的 constructor 属性指的是它的构造函数</li><li>实例对象上是没有 constructor 的，它是通过<strong>proto</strong>原型对象上的 constructor 获取的</li></ul><p>下面的代码就可以验证我们的结论</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">People</span>(<span class="hljs-params">name, age, sex</span>) {
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span> = name;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">age</span> = age;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">sex</span> = sex;
}

<span class="hljs-title class_">People</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">smoke</span> = <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span> + <span class="hljs-string">&quot;喜欢抽烟&quot;</span>);
};

<span class="hljs-keyword">let</span> zhangsan = <span class="hljs-keyword">new</span> <span class="hljs-title class_">People</span>(<span class="hljs-string">&quot;张三&quot;</span>, <span class="hljs-number">18</span>, <span class="hljs-string">&quot;男&quot;</span>);
<span class="hljs-keyword">let</span> lisi = <span class="hljs-keyword">new</span> <span class="hljs-title class_">People</span>(<span class="hljs-string">&quot;李四&quot;</span>, <span class="hljs-number">28</span>, <span class="hljs-string">&quot;男&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(zhangsan.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">People</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>); <span class="hljs-comment">//true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(zhangsan.<span class="hljs-property">constructor</span> === <span class="hljs-title class_">People</span>); <span class="hljs-comment">//true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">Array</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">//true</span>
</code></pre><p>内置的构造函数也是如此</p><pre class="hljs"><code class=""><span class="hljs-keyword">let</span> arr = []; <span class="hljs-comment">// 相等于 let arr = new Array()</span>
<span class="hljs-keyword">let</span> obj = {}; <span class="hljs-comment">// 相等于 let arr = new Object()</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">Array</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span> === arr.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">// true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">Object</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span> === obj.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">// true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">Array</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">//true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">Object</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">//true</span>
</code></pre><p>上面的代码无论是内置的还是自定义的构造函数他们的原型对象都是同一个对象</p><p>那么我们继续往下就能整理出这样的一幅关系图</p><p><img src="`+P+`" alt="画板"></p><blockquote><p>原型对象的终点是 null</p></blockquote><pre class="hljs"><code class=""><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">Array</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">// null</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">Object</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">// null</span>
</code></pre><h3>4，原型关系的完整形态</h3><p>那么既然都说了原型的终点是 null，为什么构造函数的原型对象没有指向了呢？它也是对象呀，这是因为这幅图还不是完整的，构造函数的原型对象还有着指向</p><p><img src="`+O+`" alt="画板"></p><p>最终完整的原型和原型链的一个关联关系就如同上图所属，只需要理解了这个图，那么原型和原型链的关系你就算彻底明白了</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">People</span>(<span class="hljs-params"></span>) {}

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(
  <span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">constructor</span>.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span>
); <span class="hljs-comment">// true</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span>.<span class="hljs-property">constructor</span>.<span class="hljs-property">__proto__</span> === <span class="hljs-title class_">People</span>.<span class="hljs-property">__proto__</span>); <span class="hljs-comment">// true</span>
</code></pre>`,38)])]))}}),E={class:"markdown-body"},J=r({__name:"执行栈和执行上下文",setup(i,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(o,s)=>(c(),j("div",E,[...s[0]||(s[0]=[h(`<h2>什么是执行上下文？</h2><blockquote><p>用一句话来概括就是&quot;代码执行前的一个准备工作&quot;</p></blockquote><p>运行javaScript的时候，该环境下会创建一个执行上下文，会确定代码的作用域，创建局部变量对象等等</p><h4>JavaScript中的执行环境</h4><ol><li>全局环境</li><li>函数环境</li><li>eval环境</li></ol><p>那么相对于的也有三种执行上下文</p><ol><li>全局执行上下文</li><li>函数执行上下文</li><li>eval函数执行上下文</li></ol><p><strong>执行顺序</strong></p><p>首先在JavaScript运行的时候会进入全局环境，对应会生成全局的执行上下文，这个时候函数执行上下文是不会运行的，只有函数调用的时候才会生产函数的执行上下文</p><p>当然我们的代码中不会只有一个函数，会有多个函数去执行，那么生成的函数执行上下文也会存在多个，怎么去管理多个函数生产的执行上下文呢，**执行栈（函数调用栈）**这个时候就出来管理多个函数执行上下文了</p><h2>执行栈数据结构</h2><p>先了解一下这个数据结构的存储方式，大家可以仔细理解一下下面这副图</p><p><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/32636409/1675870911722-4347dd42-7c73-43f0-98f2-c7c7456a5d0b.jpeg" alt="画板"></p><p>栈的数据遵循&quot;<strong>先进后出，后进先出&quot;<strong>的规则，即</strong>Last In First Out</strong>规则</p><p>如同我们的网球筒一样，你先放进去的网球肯定是后拿出来，最后放入的网球，是最先拿出来的，而我们的栈也是这样的一个存取模式，一般存储和取出我们称之为**”入栈/出栈“**</p><p>其特点我们可以总结一下：</p><p><strong>1，先进后出，后进先出</strong></p><p><strong>2，出口只有一个，底部不可出栈，只能通过顶部出栈</strong></p><hr><h4>栈执行怎么去处理执行上下文</h4><p>理解完栈的数据结构存储方式后，我们来看看栈是如何去管理多个执行上下文的</p><p>当我们的javaScript运行时，永远都会第一个创建全局执行上下文 （Global Context），而全局执行上下文是第一个入栈的，所以栈底部肯定是全局执行上下文</p><p>当我们函数被调用时，我们才会创建一个函数的执行上下文，它也被推入到栈中（入栈），当程序执行完毕之后会从栈中销毁被推出（出栈），执行它下面的一个执行上下文，</p><p>什么时候栈才会全部执行完毕呢？ 只有当页面被关闭的时候全局执上下文会被栈中推出（出栈），否则全局执行上下文会一直在栈底</p><p>代码模拟一下栈的具体演示</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">person</span> (<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> a = <span class="hljs-string">&#39;man&#39;</span>
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">drink</span> (<span class="hljs-params"></span>) {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;I like drink&#39;</span>)
    }
    <span class="hljs-title function_">drink</span>()
}

<span class="hljs-title function_">person</span>()
</code></pre><p>对应的栈运行步骤如下图</p><p><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/32636409/1675933142716-144802f0-0419-4744-bc06-8fde42dfc5e8.jpeg" alt="画板"></p><p>大家平时碰到的栈溢出问题就是因为栈装不下导致的</p><p>一般常见于递内调用自身，</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">person</span>(<span class="hljs-params"></span>) {
   <span class="hljs-title function_">person</span>() 
}
<span class="hljs-title function_">person</span>() 
</code></pre><h2>执行上下文生命周期</h2><blockquote><p>前面大致的简单介绍了一下执行上下文，执行上下文那么它具体做了那些准备工作呢？</p></blockquote><p>执行上下文的生命周期有两个</p><ol><li>创建阶段（进入执行上下文）：函数被调用时，进入函数环境，为其创建一个执行上下文，此时进入创建阶段</li><li>执行阶段（代码执行）：执行函数中代码，此时进入执行阶段</li></ol><h4>创建阶段</h4><p>创建阶段要做的事情：</p><ol><li>创建变量对象 （vo: variable Object） <ol><li>函数环境确定函数的形参并且赋值（并赋值）</li><li>函数环境会初始化创建Arguments对象（并赋值）</li><li>确定普通字面量形式函数声明（并赋值）</li><li>变量声明，函数表达式声明（未赋值）</li></ol></li><li>确定this指向</li><li>确定作用域</li></ol><p>创建阶段建立的时候，整体上下文环境我们可以看作为一个对象，对象有三个属性</p><pre class="hljs"><code class="">executionContextObj = {
  <span class="hljs-attr">variableObject</span>:{}, <span class="hljs-comment">// 变量对象，包含形参，Arguments对象，函数和变量</span>
  <span class="hljs-attr">scope</span>:{}, <span class="hljs-comment">//作用域链，包含内部上下文所有变量对象</span>
  <span class="hljs-attr">this</span>:{} 上下文中<span class="hljs-variable language_">this</span>的指向对象
}
</code></pre><p>创建变量对象首先会确定确定Arguments对象，在函数的形参的传入并且赋值，然后确定函数声明，每一个函数声明对应一个属性，属性值就是该函数的引用地址，最后是确定变量的声明，每个变量也对应一个属性，但注意的是这个时候并不赋值，如果该变量和函数声明式名称相同，就会忽略该变量不进行对应属性添加</p><h4>执行阶段</h4><ol><li>变量对象赋值 <ol><li>变量赋值</li><li>函数表达式赋值</li></ol></li><li>调用函数</li><li>按顺序执行代码</li></ol><p>执行上下文的生命周期两件事情也都大致的介绍了一遍，下面通过代码来看看是如何一步步的变化的</p><pre class="hljs"><code class=""><span class="hljs-keyword">const</span> people = <span class="hljs-keyword">function</span> (<span class="hljs-params">x</span>) {
	<span class="hljs-keyword">let</span> a = <span class="hljs-string">&#39;salkdh&#39;</span>
  <span class="hljs-keyword">let</span> b = <span class="hljs-keyword">function</span> <span class="hljs-title function_">b</span> (<span class="hljs-params"></span>){}
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">c</span>(<span class="hljs-params"></span>) {}
  
}

<span class="hljs-title function_">people</span>(<span class="hljs-string">&#39;张三&#39;</span>)
</code></pre><p>以上代码对应的<strong>创建阶段</strong>的变量对象如下：</p><pre class="hljs"><code class="">executionContextObj = {
  <span class="hljs-attr">variableObject</span>:{
    <span class="hljs-title class_">Arguments</span>：{<span class="hljs-number">0</span>:<span class="hljs-string">&#39;张三&#39;</span>,<span class="hljs-attr">length</span>:<span class="hljs-number">1</span>},<span class="hljs-comment">//确定Arguments对象</span>
    <span class="hljs-attr">x</span>:<span class="hljs-string">&#39;张三&#39;</span>, <span class="hljs-comment">//确定形参	</span>
    <span class="hljs-attr">c</span>: <span class="hljs-keyword">function</span> C, <span class="hljs-comment">//确定函数引用地址</span>
    <span class="hljs-attr">a</span>:<span class="hljs-literal">undefined</span>, <span class="hljs-comment">//变量声明 不赋值  初始值为undefined</span>
    <span class="hljs-attr">b</span>:<span class="hljs-literal">undefined</span>  <span class="hljs-comment">//变量声明 不赋值  初始值为undefined</span>
  },
  <span class="hljs-attr">scope</span>:{}, 
  <span class="hljs-attr">this</span>:{} 
}
</code></pre><p>可以看到在创建阶段除了Arguments对象， 形参参数和函数的声明会被赋值之外，变量属性默认都是undefined，普通形式声明的函数是在变量之前的！</p><p>当我们创建阶段结束后，就会进入执行阶段，<strong>执行阶段</strong>的代码具体赋值如下：</p><pre class="hljs"><code class="">executionContextObj = {
  <span class="hljs-attr">variableObject</span>:{
    <span class="hljs-title class_">Arguments</span>：{<span class="hljs-number">0</span>:<span class="hljs-string">&#39;张三&#39;</span>,<span class="hljs-attr">length</span>:<span class="hljs-number">1</span>},
    <span class="hljs-attr">x</span>:<span class="hljs-string">&#39;张三&#39;</span>,
    <span class="hljs-attr">c</span>: <span class="hljs-keyword">function</span> C, 
    <span class="hljs-attr">a</span>:<span class="hljs-string">&#39;salkdh&#39;</span>, <span class="hljs-comment">//变量赋值</span>
    <span class="hljs-attr">b</span>: <span class="hljs-keyword">function</span> b  <span class="hljs-comment">//变量赋值</span>
  },
  <span class="hljs-attr">scope</span>:{}, 
  <span class="hljs-attr">this</span>:{} 
}
</code></pre><p>只有在代码执行阶段变量才会进行赋值，创建阶段都是undefined，这其实也就解释了什么是变量提升</p><p>到这里相比已经对执行栈和执行上下文有了深刻的理解了，那么执行上下文期间对创建变量对象（variableObject）做了详细的介绍，还有<strong>this</strong>和<strong>作用域</strong>等着我们去探索</p>`,52)])]))}}),A={class:"markdown-body"},g=r({__name:"作用域和作用域链",setup(i,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(o,s)=>{const n=d("font");return c(),j("div",A,[s[9]||(s[9]=h(`<h2>什么是作用域？</h2><p>作用域是代码运行时此环境下可以访问的变量，函数和对象的可访问性</p><p>简单来说就是作用域决定了当前环境下的资源是否可以被使用和引用</p><p>举例个例子</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">region</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">let</span> obj = {};
}
<span class="hljs-title function_">region</span>();
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">// 访问不到</span>
</code></pre><p>obj 对象在函数作用域内声明，无法在全局作用域内进行访问</p><p><strong>作用域就相当于是一个独立的地盘，你在这个地盘内定义的变量，函数，对象等无法被外部访问，可以隔离变量，不同作用域下的同名变量也不会有冲突</strong></p><blockquote><p>ES6 之前 JavaScript 没有块级作用域，只有全局作用域和函数作用域</p><p>ES6 之后提供了&quot;块级作用域&quot;， 通过 let 和 const 来体现</p></blockquote><h2>全局作用域和函数作用域</h2><h3>1，全局作用域</h3><p>在代码中的任何层级中都能访问到的变量和对象是身处全局作用域中，反而言之全局作用域中的对象和变量应该是无论在代码的任何作用域中都能访问到的</p><ul><li>最外层的函数和最外层的变量可以在任何地方被访问到，身处全局作用域下</li></ul><pre class="hljs"><code class=""><span class="hljs-keyword">let</span> obj = <span class="hljs-string">&quot;全局作用域&quot;</span>; <span class="hljs-comment">//最外层变量</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">region</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">//最外层函数</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">//全局作用域</span>
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">variable</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">//内层函数</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">//全局作用域</span>
  }
  <span class="hljs-title function_">variable</span>();
}

<span class="hljs-title function_">region</span>();
<span class="hljs-title function_">variable</span>(); <span class="hljs-comment">//variable  is not defined</span>
</code></pre><ul><li>所有未定义直接赋值的变量自动声明为全局作用域下</li></ul><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">region</span>(<span class="hljs-params"></span>) {
  obj = <span class="hljs-string">&quot;作用域&quot;</span>;
  <span class="hljs-keyword">let</span> obj1 = <span class="hljs-string">&quot;函数作用域&quot;</span>;
}

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">//作用域</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">// obj1 is not defined</span>
</code></pre><ul><li>所有 window 对象下的属性都是身处在全局作用域下</li></ul><p>在一般情况下，window 对象内置的一些属性都是作用在全局作用域下，列如 window.name ，window.location，window.top 等等。</p><p>全局作用域有一个问题是如果我们定义了很多全局变量，那么他会污染我们的全局作用域，导致命名冲突</p><p>当我们的代码页面过于长，前后代码由不同的人编写时，就会出现这种情况</p><pre class="hljs"><code class=""><span class="hljs-keyword">var</span> name = <span class="hljs-string">&#39;张三&#39;</span>

....... <span class="hljs-comment">//数千行代码</span>

<span class="hljs-keyword">var</span> name = <span class="hljs-string">&#39;李四&#39;</span>
</code></pre><h3>2，函数作用域</h3><p>函数作用域是指在函数内部声明的变量和函数只能在本函数内进行访问和使用，外部无法进行访问和使用</p><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">region</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">let</span> obj = <span class="hljs-string">&quot;函数内部变量&quot;</span>;
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">name</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj);
  }
  <span class="hljs-title function_">name</span>();
}

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj); <span class="hljs-comment">//obj is not defined</span>
<span class="hljs-title function_">neme</span>(); <span class="hljs-comment">//neme is not defined</span>
</code></pre><p>有一点需要去注意：块语句（大括号‘{ }’中间的语句），比如 if 条件语句和 for 循环语句等不像函数，他们不会创建一个新的作用域</p><pre class="hljs"><code class=""><span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
  <span class="hljs-comment">//if条件语句不会创建一个新的作用域</span>
  <span class="hljs-keyword">var</span> name = <span class="hljs-string">&quot;李四&quot;</span>; <span class="hljs-comment">//注意这个时候这个name依然是全局作用中的</span>
}

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(name); <span class="hljs-comment">// 李四</span>
</code></pre><p>正因为这样 ES6 引入了块级作用域的概念，让变量的生命周期更加可控</p><h2>块级作用域</h2><p>块级作用域通过 let 和 const 进行声明产生，所声明的变量无法在此作用块语句之外被访问</p><p>块级作用域使用产生场景：</p><ol><li>在一个函数内部</li><li>在块语句（大括号 { } ）之中</li></ol><pre class="hljs"><code class=""><span class="hljs-keyword">function</span> <span class="hljs-title function_">region</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">let</span> age = <span class="hljs-number">19</span>;
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(age); <span class="hljs-comment">// 19</span>
}

<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
  <span class="hljs-keyword">let</span> name = <span class="hljs-string">&quot;李四&quot;</span>;
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(name); <span class="hljs-comment">// 李四</span>
}

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(age); <span class="hljs-comment">// age is not defiend</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(name); <span class="hljs-comment">// name is not defiend</span>
</code></pre><h4>特点</h4><ul><li>let const 变量不会被变量声明提升，所以一定要定义在你使用变量之前 否则就会报错，一般会放置在作用域顶部</li><li>禁止重复声明，不会像 var 一样变量声明提升会覆盖之前的赋值，如果该作用域内已经声明了 let 变量，再次声明相同的变量会导致报错</li><li>在循环内可以解决 var 声明变量的提升到全局作用域问题 ，let 会根据块级作用域生成不同的变量</li></ul><h2>作用域链</h2><h4>什么是自由变量？</h4><p>如下面代码所示，我要访问变量 name，但是变量 name 不在当前 c 作用域链中定义，那么这就是一个自由变量，</p><p>自由变量的访问需要向上级作用域层层查找</p><p><strong>举个例子</strong></p><pre class="hljs"><code class=""><span class="hljs-keyword">let</span> name = <span class="hljs-string">&quot;张三&quot;</span>;
<span class="hljs-keyword">function</span> <span class="hljs-title function_">a</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">b</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">c</span>(<span class="hljs-params"></span>) {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(name); <span class="hljs-comment">//张三</span>
    }
  }
}
</code></pre><p>从上面那个例子我们可以看到，我们去访问 name 变量的时候首先去去 C 函数作用域中找，C 没有再去上层作用域 b 找，b 没有再去上上次作用域 a 找，直到我们的全局作用域，这样的一个链式的访问方式被称之为<strong>作用域链</strong></p><hr><h4><strong>自由变量的取值</strong></h4><p>在一些特殊的情况下自由变量的取值会有些不同</p><pre class="hljs"><code class=""><span class="hljs-keyword">var</span> c = <span class="hljs-number">10</span>;
<span class="hljs-keyword">function</span> <span class="hljs-title function_">name</span>(<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(c);
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">fn</span>(<span class="hljs-params">n</span>) {
  <span class="hljs-keyword">var</span> c = <span class="hljs-number">20</span>(
    (<span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
      <span class="hljs-title function_">n</span>(); <span class="hljs-comment">// n()的结果不是20 而是10</span>
    })()
  );
}

<span class="hljs-title function_">fn</span>(name);
</code></pre><p>在这样的场景下，<strong>我们要确定的是函数创建时的作用域上下级，无论函数调用时在哪里执行，函数内部的代码去获取变量时内部没有的情况下都是根据创建时的作用域上下级向上去查找，而不是函数调用时的作用域</strong></p><hr><h3>作用域链和执行上下文的区别</h3>`,47)),a("p",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[0]||(s[0]=[t("JavaScript 属于解释型语言，JavaScript 的执行分为：解释和执行两个阶段,这两个阶段所做的事并不一样",-1)])]),_:1})]),a("p",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[1]||(s[1]=[t("解释阶段：",-1)])]),_:1})]),a("ul",null,[a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[2]||(s[2]=[t("词法分析",-1)])]),_:1})]),a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[3]||(s[3]=[t("语法分析",-1)])]),_:1})]),a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[4]||(s[4]=[t("作用域规则确定",-1)])]),_:1})])]),a("p",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[5]||(s[5]=[t("执行阶段：",-1)])]),_:1})]),a("ul",null,[a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[6]||(s[6]=[t("创建执行上下文",-1)])]),_:1})]),a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[7]||(s[7]=[t("执行函数代码",-1)])]),_:1})]),a("li",null,[l(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[...s[8]||(s[8]=[t("垃圾回收",-1)])]),_:1})])]),s[10]||(s[10]=a("p",null,[a("strong",null,"作用域是在解释阶段就已经确定了的，并且是不会改变的是静态的，执行上下文是运行阶段确定的，随时会改变")],-1))])}}});let z=[{title:"原型和原型链深入理解",content:"之所以选择基于原型的面向对象的系统，是因为一开始开发的时候布兰登·艾奇（Brendan Eich）没有打算在JavaScript这门语言当中加入类的概念，因为JavaScript的初衷就是为非专业的开发人员提供一个方便的工具，所以在开发JavaScript的时候也是尽可能的简单，易学 ",img:"@/assets/bigPicture/md10-1.png",label:0,id:10,component:C},{title:"执行栈和执行上下文",content:"javaScript的时候，该环境下会创建一个执行上下文，会确定代码的作用域，创建局部变量对象等等",img:"",label:0,id:20,component:J},{title:"作用域和作用域链",content:"作用域是代码运行时此环境下可以访问的变量，函数和对象的可访问性 单来说就是作用域决定了当前环境下的资源是否可以被使用和引用",img:"",label:0,id:30,component:g},{title:"VUE的diff算法",content:"当组件创建和更新时，vue均会执行内部的update函数，该函数使用render函数生成的虚拟dom树，将新旧两树进行对比，找到差异点，最终更新到真实dom,对比差异的过程叫diff，vue在内部通过一个叫patch的函数完成该过程",img:"",label:3,id:40,component:g}];const $={class:"md-details-wrapper module"},D={class:"md-details-title"},I=r({__name:"blogDetails",setup(i){const e=v(),o=b(null);let s=f({});return y(()=>{const n=z.find(u=>u.id===+e.params.id);s=n,o.value=n.component}),(n,u)=>(c(),j("div",$,[a("div",D,w(_(s).title),1),(c(),k(q(_(o))))]))}}),L=x(I,[["__scopeId","data-v-eab9ce81"]]);export{L as default};
