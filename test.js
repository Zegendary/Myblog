/**
 * Created by zhangxinwang on 25/03/2017.
 */

let p = new Promise((resolve,reject)=>{
  setTimeout(reject,1000,'hello zxw')
})
console.log(p)


//then 可接受两个参数，第一个接受resolve的结果，第二个参数接受reject的结果
p.then(val=>console.log(`resolve val is ${val}`),val=>console.log(`reject val is ${val}`))

setTimeout(()=>{
  console.log(p)
  p.catch(val=>console.log(`catch val is ${val}`))
},2000)