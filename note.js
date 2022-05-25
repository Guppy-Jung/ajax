// AJAX: Async javascript and XML 异步js和xml。ajax的全部内容是：用js发请求和收响应
// ajax是浏览器上的功能。浏览器可以发请求收响应，user - agent在window上加了一个XMLHttpRequest函数，
// 用这个构造函数可以（类）可以构造出一个对象，js通过它实现发请求，收响应
// 我们需要准备一个服务器：使用server.js作为服务器
// 下载或复制代码即可用node server.js 8888启动
// 添加index.html / main.js两个路由
//跟浏览器提供的window.Object一样，window.XMLHttpRequest是用来创建http请求对象的。说白了就是浏览器提供了一个window.XMLHttpRequest这个构造函数
// ，它可以构造出一个对象，js可以通过该构造函数创建出来的对象向目标服务器发送请求和接收响应
// 路由就是路径，就是if...else

//这份项目版本是用ajax实现请求css:
// 背景：以前使用link引入css样式，现在ajax加载css
// 四个步骤：
// 创建HttpRequest对象（全程XMLHttpRequest）
// 调用对象的open方法
// 监听对象的onload和onerror事件——专业前端会用onreadystatechange事件，在事件处理函数里操作css文件内容
// 调用对象的send方法（发送请求），具体代码打开mdn的CRM大法搞定


// 这份项目版本是在用ajax实现了请求css后，用ajax实现请求js
// 背景：以前我们用script来引入js文件，现在用ajax加载js
// 四个步骤：
// 创建HttpRequest对象（全称是XMLHttpRequest）
// 调用对象的open方法
// 监听对象的onreadystatechange事件——在事件处理函数里操作js文件内容
// 调用对象的send()方法（发送请求）

// 这份项目版本是在用ajax实现了请求css后，再用ajax实现请求js之后，再用ajax加载(请求)html
// 加载html（以前我们不会加载html）
// 四个步骤：
// 创建HttpRequest对象（全称是XMLHttpRequest）
// 调用对象的open方法
// 监听对象的onreadystatechange事件——在事件处理函数里操作HTML文件内容
// 调用对象的send()方法（发送请求）

// onreadystatechange方法：只要readyState属性发生变化，就会调用相应的处理函数 
// readyState属性有5个值：
// 0：代理被创建，但尚未调用open()方法   const request = new XMLHttpRequest()
// 1：open方法也被调用       request.open()
// 2：send方法已经被调，并且头部和状态已经可获得    request.send()
// 3：下载中，responseText属性已经包含部分数据    3意味着开始下载
// 4：下载操作完成
// 每一个请求有不同的阶段，每个阶段就是一个readyState的值
// 不同类型的数据有不同类型的解析方法。http是个框，里面什么都能装，可以装html,css,js,xml...,只要在响应中设置正确的Content-Type,服务器就知道怎么解析这些内容
// 解析方法：得到css之后生成style标签；得到js后生成script标签
// 得到html后使用innerHTML和DOM API; 得到xml后使用responseXML和DOM API

// json：js object notation //js对象标记语言。json是一门语言，跟html,css.js,html一样，是一门独立语言。json里面是有对象的，但是不能说
// json是对象，json不是编程语言是标记语言，跟xml,html,markdown一样，用来展示数据，有if...else是编程语言
// json支持的数据类型：string(只支持双引号)、number(支持科学计数法)、bool(true和false)、null(没有undefined)、object(里面
// 可以使用这6中数据类型，但是不能使用函数)、array 。注意跟js的7中数据类型区分。json这门标记语言不支持函数，不支持变量(所以也不支持引用)，if...else就更不支持了
// window.JSON是一个全局变量
// JSON.parse
// 将符合json语法的字符串转换成JS对应类型的数据
// JSON字符串 =》js数据
// 由于json只有6种数据类型，所以转成的数据也只有6种
// 如果不符合JSON语法，则直接抛出一个Error对象
// 这个error对象可以用try catch来捕获错误

// JSON.parse(`{'name':'frank'}`)
// let obj
// try {
//     obj = JSON.parse(`{'name':'frank'}`)
// } catch (error) {
//     console.log('出错了，错误详情是：');
//     console.log(error);
//      obj = {'name':'no name'}
// }
// console.log(obj)

// JSON.stringify
// 是JSON.parse的逆运算
// js数据 =》JSON字符串
// 由于js数据类型比JSON多，所以不一定能成功，如果失败，就抛出一个Error对象
