const http = require('http');
const PORT = 7070;
const App = require('./app');
const server = new App();

http.createServer(server.initServer()).listen(PORT, function () {
  console.log(`server listen on PORT ${PORT}`)
});

