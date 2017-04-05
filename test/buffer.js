/**
 * Created by zhangxinwang on 05/04/2017.
 */
const assert = require('assert')

//学习buffer.from()

const encodingTest = "hello world"

let buf1 = Buffer.from(encodingTest,'utf8')
console.log(buf1)

let buf2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64])
console.log(buf2.toString())

//转码
let test = '窗' // 0xe7 0xaa 0x97
console.log(Buffer.from(test))

//concat
//let test = '窗' // 0xe7 0xaa 0x97
let buf3 = Buffer.from([0xe7])
let buf4 = Buffer.from([0xaa])
let buf5 = Buffer.from([0x97])

console.log(Buffer.concat([buf3,buf4,buf5],3).toString('utf8'))

//Buffer 应用场景

const fs= require('fs')
let data = fs.createReadStream('./test/temp',{
  highWaterMark:1,
})
let out = []
data.on('data',(chunk)=>{
  out.push(chunk)
}).on('end',()=>{
  console.log(Buffer.concat(out).toString())
})

