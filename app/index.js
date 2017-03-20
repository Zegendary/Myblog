/**
 * 主要逻辑入口
 */
const fs = require('fs');

class App {

  constructor(){

  }
  initServer(){
    let _package = require('../package.json');

    return (request, response) => {
      fs.readFile('./public/index.html', 'utf8', (error, data) => {
        response.end(JSON.stringify(_package))
      })
    }
  }
}

module.exports = App;