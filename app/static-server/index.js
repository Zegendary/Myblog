/**
 * Created by zhangxinwang on 22/03/2017.
 */

const path = require('path');
const fs = require('fs');
let getPath = url=>path.resolve(process.cwd(),'public',`.${url}`);
let staticFunc = (request)=>{
  let {url} = request
  return new Promise((resolve,reject) => {
        let map = {
          '/':'/index.html',
          '/about':'/about.html',
          '/list':'/list.html'
        }
        url = map[url] || url;
        let _path=getPath(url);
        let body= fs.readFile(_path,(err,data)=>{
        if(err){
          reject(`NOT FOUND${err.stack}`)
        } else {
          resolve(data)
        }
      })
    })
};

module.exports = staticFunc