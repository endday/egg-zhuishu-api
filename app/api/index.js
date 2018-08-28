'use strict'

module.exports = {
  categories: {
    // 带书籍数量的父分类
    statistics: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
    // 带子分类的父分类
    sub: 'http://api.zhuishushenqi.com/cats/lv2/',
  },
  book: {
    // 书籍详情
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
    // 作者名下的书籍
    byAuthor: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
    // 书源
    sources: 'http://api.zhuishushenqi.com/atoc?view=summary',
    // 章节列表
    catalog: 'http://api.zhuishushenqi.com/atoc/',
    // 章节内容:id 单章id
    chapter: 'http://chapter2.zhuishushenqi.com/chapter/', // id: chapter id
    // 书籍搜索 可以搜索作者但是不精确
    search: 'http://api.zhuishushenqi.com/book/fuzzy-search', // query ?query=凡人修仙传
  },
  rank: {
    // 排名详情
    list: 'http://api.zhuishushenqi.com/ranking/gender', // id: rank id
    detail: 'http://api.zhuishushenqi.com/ranking/', // 排名分类
  },
  comment: {
    // 讨论
    discussion: 'http://api.zhuishushenqi.com/post/by-book',
    // 短评
    shortReview: 'http://api.zhuishushenqi.com/post/short-review',
    // 长评
    review: 'http://api.zhuishushenqi.com/post/review/by-book',
  },
  bookList: {
    lists: 'http://api.zhuishushenqi.com/book-list', // params: listId
  },
}
