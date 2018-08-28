'use strict'

const Controller = require('egg').Controller
const Api = require('../../api/index')

class Comment extends Controller {
  async discussion() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.comment.discussion, {
      book: ctx.query.book,
      sort: ctx.query.sort, // updated|created|comment-count 排序方式
      type: ctx.query.type, // normal,vote
      start: ctx.query.start, // number
      limit: ctx.query.limit, // number
    })
  }

  async shortReview() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.comment.shortReview, {
      book: ctx.query.book,
      sortType: ctx.query.sort, // (lastUpdated|newest|mostlike)
      start: ctx.query.start, // number
      limit: ctx.query.limit, // number
    })
  }

  async review() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.comment.review, {
      book: ctx.query.book,
      sort: ctx.query.sort, // (updated|created|comment-count) 排序方式
      start: ctx.query.start, // number
      limit: ctx.query.limit, // number
    })
  }
}

module.exports = Comment
