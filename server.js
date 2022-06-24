const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Testowanie z Mateuszem idzie coraz lepiej!');
}

const server = http.createServer(requestListener);
server.listen(port);