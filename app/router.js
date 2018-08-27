'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/category/statistics', controller.api.cats.statistics)
  router.get('/api/category/sub', controller.api.cats.sub)
  router.get('/api/category-books/:category', controller.api.book.byCategories)
  router.get('/api/author-books/:author', controller.api.book.byAuthor)
  router.get('/api/book/:id', controller.api.book.detail)
  router.get('/api/recommend/:id', controller.api.book.recommend)
  router.get('/api/sources/:id', controller.api.book.sources)
  router.get('/api/catalog/:id', controller.api.book.catalog)
  router.get('/api/chapter/:chapterId', controller.api.book.chapter)
  router.get('/api/search/:query', controller.api.book.search)
}
