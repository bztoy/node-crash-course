const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server object
const server = http.createServer((req, res) => {

    const parent_dir = require('path').resolve(__dirname, '..');
    // File path
    let filePath = path.join(parent_dir, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filePath);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type

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
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(parent_dir, 'public', '404.html'), (err, content404) => {
                    if(err) throw err;
                    res.writeHead(200, {'Content-Type': contentType});
                    res.end(content404, 'utf8');
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));