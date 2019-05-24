



//require方法有两个作用：
//  1.加载文件模块并执行里面的代码；
//  2.拿到被加载文件模块导出的接口对象
//      在每个文件模块中都提供了一个对象exports
//      exports默认是一个空对象
//      把所有需要被外部访问的成员挂载到这个 exports 对象中



var bExports = require('./09-加载与导出2.js')

console.log(bExports.add(10, 30))