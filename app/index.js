/**
 * 主要逻辑入口
 */
const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server/')
const apiServer = require('./api')

class App {

  constructor(){

  }
  initServer(){
    return (request,response)=>{
      let {url} = request
      let body = ''
      let headers = {
        'X-power-by':'node.js'
      }
      //url action end  =>ajax
      if (url.match('action')){
        apiServer(url).then(val=>{
          body = JSON.stringify(val)
          headers = Object.assign(headers,{'Content-Type':'application/json'})
          response.writeHead(200,'resolve ok',headers)
          response.end(body)
        })
      } else {
        staticServer(url).then((val)=>{
          response.writeHead(200,'resolve ok',headers)
          response.end(val)
        })
      }
    }
  }
}

module.exports = App;