/**
 * Created by zhangxinwang on 25/03/2017.
 */
module.exports = (url)=>{
  let apiMap = {
    '/list.action':['吉他','钢琴','贝斯'],
    '/user.action':['张新望','男','1992']
  }
  return Promise.resolve(apiMap[url])
}