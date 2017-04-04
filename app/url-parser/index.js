/**
 * Created by zhangxinwang on 29/03/2017.
 */

//url : query body method

module.exports = (request)=>{
  let {url,method,context} = request

  method = method.toLowerCase()

  return Promise.resolve({
    then:(resolve,reject)=>{
      context.method = method
      context.query = {}

      if(method == 'post'){
        let data = ''
        request.on('data',(chunk)=>{
          data += chunk
        }).on('end',()=>{
          context.body = JSON.parse(data)
          resolve()
        })
      } else {
        resolve()
      }
    }
  })
}