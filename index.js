// write your code here
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
