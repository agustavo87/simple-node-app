import http from 'node:http';
import fs from 'node:fs';
import pathRouter from './pathRouter.js';
import dotenv from 'dotenv'

dotenv.config()


const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    const path = pathRouter(req)
    fs.readFile(path.filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('File not found');
                console.log(`File not found: ${path.filePath}`)
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
                console.log(`Server Error: ${err.code}`)
            }
        } else {
            res.writeHead(200, { 'Content-Type': path.contentType });
            res.end(content, 'utf-8');
            console.log(`Request url:${req.url} > Path:${path.filePath}`)
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});