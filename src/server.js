const http = require('node:http');
const fs = require('fs');
const path = require('path');
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const publicPath = 'public'
const server = http.createServer((req, res) => {
    let filePath = `./${publicPath}` + req.url;
    if (filePath === `./${publicPath}/`) {
        filePath = `./${publicPath}/index.html`;
    }
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('File not found');
                console.log(`File not found: ${filePath}`)
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
                console.log(`Server Error: ${err.code}`)
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
            console.log(`Request url:${req.url} > Path:${filePath}`)
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});