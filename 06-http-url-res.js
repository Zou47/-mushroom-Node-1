

var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    //console.log('收到请求了，请求路径是'+req.url)

    // res.write('hello')
    // res.write('world')
    // res.end('hello nodejs')

    //根据不偶同请求路径发送不同响应结果

    var url = req.url;

    // if(url === '/'){
    //     res.end('index page')
    // }else if(url === '/login'){
    //     res.end('login page')
    // }else{
    //     res.end('404 NOT FOUND')
    // }

    if(url === '/products'){
        var products = [
            {
                name: '苹果 X',
                price: 9999
            },
            {
                name: '菠萝 X',
                price: 19999
            },
            {
                name: '小辣椒 X',
                price: 2333
            }
        ]

        //响应内容只能是二进制数据或者字符串，数字对象数组布尔值都不行
        res.end(JSON.stringify(products))
    }



})

server.listen(47,function(){
    console.log('服务器启动成功可以使用了')
})

