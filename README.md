# Node.js(1)

## 1. 初步了解

### 1.1 Node.js是什么

- Node.js不是语言、库、框架，是一个js运行时的环境，即node.js可以解析和执行js代码，js可以完全脱离浏览器来运行。

- 浏览器中的js：EcmaScript,BOM,DOM

- node中的js：EcmaScript（没有BOM,DOM），在node这个js执行环境中为js提供了一些服务器级别的操作API，例如文件读写，网站服务的构建，网络通信，http服务器等处理。

- 代码只是具有特定格式的字符串，引擎可以认识，帮助去解析和执行，Chrome的V8引擎是目前公认的解析执行js代码最快的，node作者把Chrome的V8引擎移植了出来，开发了一个独立的js运行时环境。

- node.js使用event-driven事件驱动，non-blocking I/O model 非阻塞I/O模型（异步），轻量和高效

- npm是世界上最大的开源库生态系统，绝大多数js相关的包都存放在了npm上，这样做目的是让开发人员更方便的去下载使用。

  `npm install jquery`

### 1.2 Node.js能做什么

- Web服务器后台
- 命令行工具
  + npm（node）
  + git（c语言）
  + hexo（node）
  + ……
- 对于前端开发工程师来讲，接触node最多的是它的命令行共苦

## 2. 起步

### 2.1 Hello World

1. 创建编写js脚本文件；
2. 打开终端，定位到脚本文件所属目录；
3. 输入`node 文件名`执行对应文件（文件名不能使用`node.js`命名，最好别不要使用中文）



- 解析执行js

  ```js
  var foo = 'hello node.js';
  
  console.log(foo);
  ```

- 读写文件
  + 浏览器中的js没有读取文件操作能力，但是node中的js具有文件操作能力
  + `fs`是`file-system`的简写，就是文件系统的意思
  + 在node中如果想要进行文件操作，就必须引入fs这个核心模块。
  + 在fs中提供了所有文件操作相关的 API，例如：`fs.readFile`就是用来读取文件的。
+ 浏览器不认识node代码
  
- http

  + 使用node非常轻松的构建一个web服务器
  + 在node中专门提供了一个核心模块：http
  + http这个模块的职责就是帮你创建编写服务器的
  + 最简单的http服务：

  ```js
  //使用node很有成就感的一件事
  //使用node非常轻松的构建一个web服务器
  //在node中专门提供了一个核心模块：http
  //http这个模块的职责就是帮你创建编写服务器的
  
  //1. 加载http核心模块
  var http = require('http')
  
  //2.使用http.creatSever()方法创建一个web服务器
  //  返回一个Sever实例
  var server = http.createServer()
  
  //3.服务器要干嘛？
  //  提供服务：对 数据 的服务
  //  发请求
  //  接受请求
  //  处理请求
  //  给个反馈（发送响应）
  //  注册request请求事件
  //  当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数 
  server.on('request',function(){
      console.log('收到客户端的请求了')
  })
  
  //4.绑定端口号，启动服务器
  server.listen(4747,function(){
      console.log('服务器启动成了，可以通过http://127.0.0.1:4747/ 来进行访问')
  })
  ```

  ![1558435147344](C:\Users\12547\AppData\Roaming\Typora\typora-user-images\1558435147344.png)
  

## 3. Node中的Js

+ ES
  + 没有DOM，BOM
+ 核心模块
+ 第三方模块
+ 用户自定义模块

### 3.1 核心模块

Node为js提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。例如文件操作的 `fs` 核心模块，http服务构建的 `http` 模块，`path` 路径操作模块，`os` 操作系统信息模块。

如果想要使用核心模块，就必须：

```js
var fs = require('fs');

var http = require('http');
```

### 3.2 用户自定义模块

+ require
  + 加载文件模块并执行里面的代码；
  + 拿到被加载文件模块导出的接口对象；

+ exports
  + 在每个文件模块中都提供了一个对象exports
  + exports默认是一个空对象
  + 把所有需要被外部访问的成员挂载到这个 exports 对象中

## 4. Web服务器开发

### 4.1 ip地址和端口号

+ 不占用默认端口号
  + 例如http服务的80
+ 端口号范围0~65535
+ 所有联网的程序都需要进行网络通信，计算机中只有一个物理网卡，而且同一个局域网中，网卡的地址必须是唯一的。网卡通过唯一的ip地址来进行定位的。
+ IP用来定位计算机，端口号用来定位具体的应用程序
+ 我们用一些简单好记的就可以，例如4747,3000……
+ 可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以
+ 一台计算机中，同一端口号同一时间只能被一个程序占用

### 4.2 Content-Type

+ http://tool.oschina.net/








