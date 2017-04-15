/**
 * Created by zhangxinwang on 25/03/2017.
 */
module.exports = (ctx)=>{
  let { url,method } = ctx.req
  let { resCtx,reqCtx } = ctx
  let { res } = ctx
  let apiMap = {
    '/list.action':['吉他','钢琴','贝斯'],
    '/user.action':['张新望','男','1992']
  }
  method = method.toLowerCase();
  return Promise.resolve({
    then:(resolve,reject)=>{
      // 因为我们对method没有过滤
      if(url.match('action')){
        if(method == 'get'){ //localhost:7000?a=1&b=2
          resCtx.body = JSON.stringify(apiMap[url])
        }else{
          let { body } = reqCtx;
          //处理post B post  ==socket==  S
          resCtx.body = JSON.stringify(body)
        };
        resCtx.headers = Object.assign(resCtx.headers,{
          "Content-Type":"application/json"
        })
      }
      resolve()
    }})
}