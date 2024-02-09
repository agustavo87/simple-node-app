import path from 'node:path';
import dotenv from 'dotenv'

dotenv.config()

const publicPath = process.env.PUBLIC_PATH || 'public'

export default function pathRouter(req) {
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
    return {filePath, contentType}
}