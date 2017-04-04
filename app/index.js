/**
 * 主要逻辑入口
 */
const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')
const urlParse = require('./url-parser')

class App {

  constructor(){

  }
  initServer(){
    return (request,response)=>{
      let {url,method} = request
      request.context = {
        body:'',
        query:{},
        method:'get'
      }
      // console.log(request)
      //链
      urlParse(request).then(()=>{
        return apiServer(request)
      }).then(val => {
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
    }
  }
}

module.exports = App;