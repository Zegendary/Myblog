const http = require('http');
const PORT = 7070;
const App = require('./app');
const server = new App();

//中间件
const staticServer = require('./app/static-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);

http.createServer(server.initServer()).listen(PORT, function () {
  console.log(`server listen on PORT ${PORT}`)
});

