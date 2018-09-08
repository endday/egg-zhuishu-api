'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/category/statistics', controller.api.category.statistics)
  router.get('/api/category/sub', controller.api.category.sub)
  router.get('/api/book/category/:category', controller.api.book.byCategories)
  router.get('/api/book/author/:author', controller.api.book.byAuthor)
  router.get('/api/book/recommend/:id', controller.api.book.recommend)
  router.get('/api/book/sources/:id', controller.api.book.sources)
  router.get('/api/book/catalog/:id', controller.api.book.catalog)
  router.get('/api/book/chapter/:chapterLink', controller.api.book.chapter)
  router.get('/api/book/search/:query', controller.api.book.search)
  router.get('/api/book/:id', controller.api.book.detail)
  router.get('/api/rank/list', controller.api.rank.list)
  router.get('/api/rank/:rankId', controller.api.rank.detail)
  router.get('/api/book-list', controller.api.bookList.lists)
  router.get('/api/book-list/:listId', controller.api.bookList.detail)
  router.get('/api/comment/discussion', controller.api.comment.discussion)
  router.get('/api/comment/short-review', controller.api.comment.shortReview)
  router.get('/api/comment/review', controller.api.comment.review)
}
