import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Context-Type': 'text/html' });
                res.end('<h1>Home page</h1>');
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Context-Type': 'text/html' });
                res.end('<h1>About page</h1>');
            } 
        } else {
            throw new Error('Message not supported')
        }
    } catch (e) { 
            res.writeHead(500, { 'Context-Type': 'text/plain' });
            res.end('<h1>Server Error</h1>');

    }

});



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})