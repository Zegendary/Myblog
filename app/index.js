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
      //链
      apiServer(request).then(val => {
        if(!val){
          // Promise
          return staticServer(request)
        } else {
          return val
        }
      }).then(val => {
        //数组
        let base = {'X-power-by':'node.js'}
        let body = ''
        if(val instanceof Buffer){
          body = val
        } else {
          body = JSON.stringify(val)
          let headers = Object.assign(base,{'Content-Type':'application/json'})
          response.writeHead(200,'resolve ok',headers)
        }
        response.end(body)
      })



      // let body = ''
      // let headers = {
      //   'X-power-by':'node.js'
      // }
      // //url action end  =>ajax
      // if (url.match('action')){
      //   apiServer(url).then(val=>{
      //     body = JSON.stringify(val)
      //     headers = Object.assign(headers,{'Content-Type':'application/json'})
      //     response.writeHead(200,'resolve ok',headers)
      //     response.end(body)
      //   })
      // } else {
      //   staticServer(url).then((val)=>{
      //     response.writeHead(200,'resolve ok',headers)
      //     response.end(val)
      //   })
      // }
    }
  }
}

module.exports = App;