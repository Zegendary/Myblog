/**
 * Created by zhangxinwang on 03/05/2017.
 */
const mongoose = require('mongoose');

const { blogSchema,categorySchema } = require('./schema');
//第一个参数是colleciton的名字
const BlogModel = mongoose.model('Blog', blogSchema)
const CategoryModel = mongoose.model('Category',categorySchema)
const $_saveBlog = blog=>{
  return BlogModel.findOneAndUpdate({title:blog.title},blog,{
    upsert:true
  }).exec()
      .then(_blog=>{
        return {
          status:1,
          data:_blog
        }
      })
}
const $_saveCategory = category=>{
  return CategoryModel.findOneAndUpdate({name:category.name},category).then(_category=>{
    return {
      status:1,
      data:_category
    }
  })
}

module.exports = {
  $_saveBlog,
  $_saveCategory
}
