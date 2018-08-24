'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/cats/statistics', controller.api.cats.statistics)
  router.get('/api/cats/sub', controller.api.cats.sub)
  router.get('/api/book/category/:category', controller.api.book.byCategories)
  router.get('/api/book/author/:author', controller.api.book.byAuthor)
  router.get('/api/book/:id', controller.api.book.detail)
  router.get('/api/book/:id/recommend', controller.api.book.recommend)
}
