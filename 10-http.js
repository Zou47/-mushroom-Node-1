



var http = require('http')
var server = http.createServer()

server.on('request', function(req, res) {
    var url = req.url;
    // 浏览器不知道服务器响应内容的编码会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是gbk，解决方法是告诉浏览器我给你发送的内容是什么编码的
    if(url === '/plain') {
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('hello 邹思琪')
    }else if (url === '/html'){
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<p>hello html</p><a href = "">点我</a>')
    }
})

server.listen(3000, function() {
    console.log('server is runing..')
})