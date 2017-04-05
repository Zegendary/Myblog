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
    this.middlewareArr = [];
    //设计一个空的Promise
    this.middlewareChain = Promise.resolve();
  }
  use(middleware){
    this.middlewareArr.push(middleware);
  }
  //创建Promise链条
  composeMiddleware(context){
    let { middlewareArr }= this
    //根据中间件数组 创建Promise链条
    for(let middleware of middlewareArr){
      this.middlewareChain = this.middlewareChain.then(()=>{
        return middleware(context)
      })
    }
    return this.middlewareChain
  }
  initServer(){
    return (request,response)=>{
      let {url,method} = request
      request.context = {
        body:'',
        query:{},
        method:'get'
      }
      let context = {
        req:request,
        reqCtx:{
          body:'',
          query:{}
        },
        res:response,
        resCtx:{
          headers:'',
          body:''
        }
      }
      // console.log(request)
      //链
      urlParse(context).then(()=>{
        return apiServer(context)
      }).then(() => {
        return staticServer(context)
      }).then(() => {
        //数组
        let base = {'X-power-by':'node.js'}
        let { body,headers } = context.resCtx
        response.writeHead(200,'resolve ok',Object.assign(base,headers))

        response.end(body)
      })
    }
  }
}

module.exports = App;