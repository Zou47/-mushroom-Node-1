

//1.使用 require 方法加载 fs 核心模块
var fs = require('fs');

//2.读取文件
//  第一个参数是要读取的文件路径
//  第二个参数是一个回调函数
//    error
//      如果读取失败，error就是错误对象
//      如果读取成功，error就是null
//    data
//      如果读取失败，data就是undefined没有数据
//      如果读取成功，data就是读取到的数据
fs.readFile('./demo.txt',function(error,data){
    //文件中存储的其实都是二进制数据0 1，都转为16进制了，可以通过 toString 方法转换为认识的字符


    //在这里可以通过判断error是否为null
    if(error){
        console.log('读取文件失败了');
    }else{
        console.log(data.toString());
    }

})
