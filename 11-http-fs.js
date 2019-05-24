



var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res) {
    // /index.html
    var url = req.url;
    if(url === '/') {
        fs.readFile('./resource/index.html',function(err, data) {
            if(err) {
                res.setHeader('Content-Type','text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试')
            } else {
                res.setHeader('Content-Type','text/html; charset=utf-8')
                res.end(data) 
            }
        })
    } else if(url === '/img') {
        // url: 统一资源定位符
        // 一个url最终其实是要对应到一个资源的
        fs.readFile('./resource/img1.jpg',function(err, data) {
            if(err) {
                res.setHeader('Content-Type','text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试')
            } else {
                // 图片不需要指定编码，一般编码指的字符编码
                res.setHeader('Content-Type','image/jpeg')
                res.end(data) 
            }
        })
    }
})

server.listen(3000, function() {
    console.log('server is runing..')
})