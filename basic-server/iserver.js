const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server object
const server = http.createServer((req, res) => {
    let filename = '';
    let contentType = 'text/html';
    let html = true;
    let notFound = false;

    switch (req.url) {
        case '/':
            filename = 'index.html';
            break;
        case '/about':
            filename = 'about.html';
            break;
        case '/api/users':
            contentType = 'application/json';
            html = false;
            break;
        default:
            notFound = true;
            filename = '404.html';
    }

    if (html) {
        const parent_dir = require('path').resolve(__dirname, '..');
        fs.readFile(path.join(parent_dir, 'public', filename), (err, content) => {
            if (err) throw err; // err.code == 'EN0ENT' means file not found

            if (notFound) {
                res.writeHead(404, contentType);
            } else {
                res.writeHead(200, {'Content-Type': contentType});
            }
            
            res.end(content);
        });
    } else {
        res.writeHead(200, {'Content-Type': contentType});
        res.end(JSON.stringify([{username: 'John Doe'}, {username: 'Joe Don'}]));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));