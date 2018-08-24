'use strict'

const baseUrl = 'http://api.zhuishushenqi.com/'

module.exports = {
  categories: {
    statistics: `${baseUrl}cats/lv2/statistics`,
    sub: `${baseUrl}cats/lv2/`,
  },
  book: {
    detail: `${baseUrl}book/`,
    // url params: {
    // id: BookId (5106099abb1c67cf28000016)
    // }
    byCategories: `${baseUrl}book/by-categories`,
    // query: {
    //   gender: 'male' // 性别
    //   type: 'reputation' // 按照不同的类型获取分类下的书籍(hot, new, reputation, over)
    //   major: '玄幻' // 父分类
    //   minor: '东方玄幻' // 子分类
    //   start: 0 // 起始位置
    //   limit: 20 //每页数量
    // }
    byAuthor: `${baseUrl}book/accurate-search`, // query ?author=忘语
  },
}
