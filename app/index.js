/**
 * 主要逻辑入口
 */
const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server/')

class App {

  constructor(){

  }
  initServer(){
    return (request,response)=>{
      let {url} = request
      let body = staticServer(url)
      response.writeHead(200,'resolve ok',{'X-power-by':'node.js'})
      response.end(body)
    }
  }
}

module.exports = App;