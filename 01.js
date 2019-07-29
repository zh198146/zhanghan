//  引入模板
const http = require('http');

const server = http.createServer();

const fs = Request('fs');

server.on('request', (req, res) => {
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        fs.readFile('.' + req.url, (err, data) => {
            // if(err) throw err; // throw 一般只会在特别严谨的逻辑使用
            if (err) console.log(err);
            res.end(data);
        })

    } else {
        if (req.url === './getAllHeros') {
            fs.readFile('./data/heros.json', (err, data) => {
                res.end(data);
            })
        }
    }
})