const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function requestHandler(req, res) {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '/index.html' || reqPath === '/admin.html' || reqPath === '/resident.html') {
    reqPath = '/index.html';
  }

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Fallback to index.html for any route
      fs.readFile(path.join(__dirname, 'index.html'), (err2, fallbackContent) => {
        if (err2) {
          res.writeHead(404);
          res.end('File not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fallbackContent);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

// Listen on Port 5173 (what the browser is trying to reach) AND Port 5000
[5173, 5000, 3000].forEach(port => {
  const server = http.createServer(requestHandler);
  server.on('error', (e) => {
    console.log(`Port ${port} note:`, e.message);
  });
  server.listen(port, '0.0.0.0', () => {
    console.log(`khvreddy Hostel Management System running at http://localhost:${port}`);
  });
});
