

var fs = require('fs');

//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
// error
// 成功：文件写入成功，error为null
// 失败：文件写入失败，error为错误对象
fs.writeFile('./hello.md','嗨大家好我是node',function(error){

    //不允许的文件名
    if(error){
        console.log('文件写入失败');
    }else{
        console.log('文件写入成功');
    }
})