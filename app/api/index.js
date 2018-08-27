'use strict'

module.exports = {
  categories: {
    statistics: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
    sub: 'http://api.zhuishushenqi.com/cats/lv2/',
  },
  book: {
    detail: 'http://api.zhuishushenqi.com/book/',
    /* url params: {
    id: BookId (5106099abb1c67cf28000016)
    } */
    byCategories: 'http://api.zhuishushenqi.com/book/by-categories',
    /* query: {
      gender: 'male' // 性别
      type: 'reputation' // 按照不同的类型获取分类下的书籍(hot, new, reputation, over)
      major: '玄幻' // 父分类
      minor: '东方玄幻' // 子分类
      start: 0 // 起始位置
      limit: 20 //每页数量
    } */
    byAuthor: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
    sources: 'http://api.zhuishushenqi.com/atoc?view=summary',
    catalog: 'http://api.zhuishushenqi.com/atoc/', // 章节列表
    chapter: 'http://chapter2.zhuishushenqi.com/chapter/', // id: chapter id
    search: 'http://api.zhuishushenqi.com/book/fuzzy-search', // query ?query=凡人修仙传
  },
}
