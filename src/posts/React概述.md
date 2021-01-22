---
title: "React概述"
date: "2021-01-21 23:45:01"
tags: "编程"
categrory: "博客"

---


我们要给描述一个概念或者定义一个事物，通常有两种方式。一种就是弄清楚它的构成，另一种就是它的性质。

<!-- end -->

对于React来说，它是一个JS库。核心构成为：

- 组件化、声明式编码
- JSX语法
- 虚拟DOM、diffing算法

对移动端友好（React Native）。

React只关注界面，负责将数据渲染到页面，而不涉及数据的处理或其他操作。

## 组件化与模块化

- 模块化：通常对JS而言，根据功能将一整个JS文件拆分成一个个的模块，降低耦合度，使代码结构清晰易于维护。

- 组件化：一般根据业务逻辑，将产品的某一个部分从整体拆分。其中可能包括HTML、CSS、JS、IMG、VIDEO等资源，主要目的也是为了方便复用。

## 声明式编程与命令式编程

声明式编程关注要什么(what)，命令式编程关注怎么实现(how)。

命令式：

```js
var array = [1,2,3]
var output = []
for(var i = 0; i < array.length; i++) 
{
  var tmp = array[i] * 2
  output.push (tmp)
}
console.log (output) //=> [2,4,6]
```

声明式：

```js
var array = [1,2,3,]
var output = array.map (function (n) 
{
  return n * 2
})
console.log (output) //=> [2,4,6]
```

## 虚拟DOM与diffing算法

虚拟DOM是React将从内存中读取的数据不直接渲染到页面，而是创建一个中间层，再将中间层的数据渲染到页面。等到数据有变动了，虚拟DOM通过diffing算法找出变动的部分，仅仅将变动的部分渲染到页面，而不是将整个页面重新渲染，这样减少重绘可以优化页面响应速度，减轻浏览器负担。

虚拟DOM本质是Object类型对象，其与真实DOM的区别在于：

- 虚拟DOM的属性少，在控制台打印出显示为有少量属性的对象。
- 真实DOM的属性多，在控制台打印为具体DOM内容，通过`debugger()`查看发现有大量属性和方法。

## 如何创建虚拟DOM

1. 定义一个虚拟DOM;

   ```jsx
   const VDOM = <h1>im a virtual dom element.</h1>
   ```

2. 将其渲染到页面。

   ```jsx
   React.render(VDOM, document.getElementById("app"))		
   ```

## JSX语法

JSX是JS语言的扩展，在其中可以使用JS。

### 语法规则

使用JSX需要遵循一些规则：

1. 虚拟DOM不加引号;

   ```JSX
   function Btn() {
       return <button>Im Btn</button> //不可加引号
   }
   ```

2. 表达式必须加大括号;

   ```jsx
   const Btn = <button style={{color: 'red'}}></button>	//对象
   <Btn>{a}</Btn>	//变量
   <Btn>{ foo(a) }</Btn>	//函数
   ```

3. 样式类名由`class`改为`className`;

4. 内联样式必须用双括号，外面括号表示其为表达式，里面括号表明其为对象，如规则2中所示;

5. CSS属性名由横线连接改为驼峰命名;

   ```jsx
   const Btn = <button style={{fontSize: '2rem'}}></button>
   ```

6. 虚拟DOM必须只能有一个父元素;

   ```jsx
   const Btn = （
   	<div>
   		<button style={{fontSize: '2rem'}}></button>
   		<button style={{fontSize: '2rem'}}></button>
   	</div>
   	）
   ```

7. 单标签必须闭合;

   ```jsx
   <img ... />
   <img></img>
   <Btn />
   ```

8. JSX转化为HTML时，标签名首字母为

   1. 小写，则转为同名HTML标签，不存在则报错;
   2. 大写，则转为查询是否为已定义组件，没有则报错。

### 为什么用JSX扩展JS

为了方便实现嵌套结构的组件。比如用JS实现创建一个虚拟DOM如下：

```html
<html>
    <body>
    <div id = "app">我被创建了...</div>
        <script>
        	const VDOM = React.createElement('div', {id: 'app'}, "我被创建了...");
        </script>
    </body>
</html>
```

如果现在需要用在`app`下再增加一个标签实现两层嵌套，创建代码将变成：

```jsx
const VDOM = React.createElement('div', {id: 'app'}, React.createElement('span'，"我被创建了..."));
```

可见多层嵌套结构用JS实现将十分繁琐，所以通过JSX来解决这个问题：

```jsx
const VDOM = <div><span>我被创建了...</span></div>
```

### Bable

JSX会经过Bable转换成向后兼容严格模式下的JS。

> 注意：经过转换后函数式组件中的this为`undefined`。

## 表达式与语句的区别

表达式一定有返回值：

```jsx
a
a + b
a(1)
arr.map()
function test(){}
```

语句一定涉及值的操作，比如比较、赋值：

```jsx
if()
for()
switch()
let a = b;
```



## 


