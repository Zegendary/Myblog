/**
 * Created by zhangxinwang on 25/03/2017.
 */
module.exports = (request)=>{
  let {url,method} = request
  let apiMap = {
    '/list.action':['吉他','钢琴','贝斯'],
    '/user.action':['张新望','男','1992']
  }
  method = method.toLowerCase()
  //对方法进行过滤
  if(method == 'get'){
    return Promise.resolve(apiMap[url])
  } else {
    return new Promise((resolve,reject)=>{
      let data = ''
      request.on('data',(chunk)=>{
        data += chunk
      }).on('end',()=>{
        resolve(JSON.parse(data))
      })
    })
  }
}