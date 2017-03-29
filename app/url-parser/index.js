/**
 * Created by zhangxinwang on 29/03/2017.
 */

//url : query body method

module.exports = (request)=>{
  let {url,method,context} = request
  method = method.toLowerCase()

  return new Promise.resolve({
    then:(resolve,reject)=>{
      context.method = method
      context.query = {}

      request.on('data',(chunk)=>{
        data += chunk
      }).on('end',()=>{
        resolve(JSON.parse(data))
      })
    }
  })
}