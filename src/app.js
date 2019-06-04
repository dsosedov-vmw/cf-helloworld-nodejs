const http = require('http');

const port = process.env.PORT || 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Cloud Foundry!\n');
});

server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
