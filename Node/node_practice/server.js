const http = require('http');

// const server =http.createServer((req,res)=>{
//     res.write('hello');//sends data in parts
//     res.write(' user');
//     console.log(req.url);
//     console.log(req.method);
//     res.end();//end response 
// });

// server.listen(3000,()=>{//tell the server to run on port 3000
//     console.log('server running on port 3000');
// });


// const server1=http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page');
//     }else if(req.url === '/about'){
//         res.end('About Page');
//     }else{
//         res.end('404 Not Found');
//     }
// }).listen(3001);

// const server2= http.createServer((req,res)=>{
//    if(req.method === 'GET' && req.url === '/'){
//     res.setHeader('Content-Type','text/html');
//     res.end('<h1>Home Page</h1>');
//     }else if(req.method === 'GET' && req.url === '/about'){
//         res.end('About Page');
//     }else if (req.method === 'POST' && req.url === '/data'){
//         //reading data from request
//         let body ='';
//         req.on('data',chuck=>{
//             body+=chuck;
//         });
//         req.on('end',()=>{
//             console.log(body);
//             res.end('Data received');
//         });
//     }else{
//         res.statusCode=404;
//         res.end('page not found');
//     }
// }).listen(3002);



// //Routing - deciding what to response based on URL
// //req.url - route user requested
// //req.method - type of request GET,POST

const fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile('sample.txt',(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end('Error loading file');
            return;
        }
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(data);
    })
}).listen(3000);

//writeHead(status,headers) - sets status,headers
