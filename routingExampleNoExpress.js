var http = require('http');
var fs = require('fs');

//Basic Routing Example
var server = http.createServer(function(req, res){
    console.log('request made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var fighters = [{name: 'Ken', color: 'red'},{name: 'Guile', color: 'green'} ];
        res.writeHead('200', {'Content-Type': 'application/json'});
        res.end(JSON.stringify(fighters));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.createReadStream('/404.html').pipe(res);
    }
});

server.listen(8080, '127.0.0.1');
console.log("now listening to port 8080");