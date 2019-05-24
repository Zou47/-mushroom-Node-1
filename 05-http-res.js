


var http = require('http')
var server = http.createServer()

//request请求时间处理函数，需要接受两个参数
//  request请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  response响应对象
//      响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    
    //request.url，端口号之后的那一部分路径，默认为/
    console.log('收到客户端的请求了，请求路径是'+request.url)

    //response对象有一个方法：write 可以用来给客户端发送相应数据
    //write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
    response.write('hello');
    //告诉客户端，我的话说完了
    response.end();
})

server.listen(4747,function(){
    console.log('服务器启动成了，可以通过http://127.0.0.1:4747/ 来进行访问')
})