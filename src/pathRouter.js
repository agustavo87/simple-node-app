import path from 'node:path';

const publicPath = 'public'

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