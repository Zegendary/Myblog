/**
 * Created by zhangxinwang on 22/03/2017.
 */

const path = require('path');
const fs = require('fs');
const mime = require('mime')
let getPath = pathname=>path.resolve(process.cwd(),'public',`.${pathname}`);
let staticFunc = (ctx)=>{
  let { pathname } = ctx.reqCtx;
  let { resCtx } =  ctx;
  return new Promise((resolve,reject)=>{
    if(pathname.match(/\./) && !pathname.match('action')){
      let _path=getPath(pathname);
      resCtx.headers = Object.assign(resCtx.headers,{
        'Content-Type':mime.lookup(_path)
      });
      let body = fs.readFile(_path,(err,data)=>{
        if(err){
          resCtx.body = `NOT FOUND${err.stack}`
        }
        resCtx.body = data;
        resolve()
      })
    }else{
      resolve()
    }
  })
};


module.exports = staticFunc