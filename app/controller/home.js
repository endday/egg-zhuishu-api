'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body =
      '<div><a href="/api/category/statistics">/api/category/statistics<a/></div>' +
      '<div><a href="/api/category/sub">/api/category/sub<a/></div>' +
      '<div><a href="/api/book/category/玄幻">/api/book/category/:category<a/></div>' +
      '<div><a href="/api/book/author/唐家三少">/api/book/author/:author<a/></div>' +
      '<div><a href="/api/book/recommend/50befdea2097935131000001">/api/book/recommend/:id<a/></div>' +
      '<div><a href="/api/book/sources/50befdea2097935131000001">/api/book/sources/:id</a></div>' +
      '<div><a href="/api/book/catalog/57e90f17abbe08143bdc1234">/api/book/catalog/:id</a></div>' +
      '<div><a href="/api/book/chapter/http%3A%2F%2Fbook.my716.com%2FgetBooks.aspx%3Fmethod%3Dcontent%26bookId%3D47020%26chapterFile%3DU_47020_201806161319398190_9271_2.txt">/api/book/chapter/:chapterId</a></div>' +
      '<div><a href="/api/book/search/唐家三少">/api/book/search/:query</a></div>' +
      '<div><a href="/api/book/56928442c49f3bce42b7f521">/api/book/:id</a></div>' +
      '<div><a href="/api/rank/list">/api/rank/list</a></div>' +
      '<div><a href="/api/rank/5a322ef4fc84c2b8efaa8335">/api/rank/:rankId</a></div>' +
      '<div><a href="/api/book-list">/api/book-list</a></div>' +
      '<div><a href="/api/book-list/5454ccfdbd7c68e31be5577e">/api/book-list/:id</a></div>' +
      '<div><a href="/api/comment/discussion?book=50befdea2097935131000001">/api/comment/discussion</a></div>' +
      '<div><a href="/api/comment/short-review?book=50befdea2097935131000001">/api/comment/short-review</a></div>' +
      '<div><a href="/api/comment/review?book=50befdea2097935131000001">/api/comment/review</a></div>'
  }
}

module.exports = HomeController
