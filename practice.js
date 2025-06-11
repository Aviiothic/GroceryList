const PORT = 5000;
import http from 'http';

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'plain/text');

    if(req.url==='/hello'){
        res.end("Hello World");
    }else {
        res.end("wrong url");
    }
})