'use strict'

const Controller = require('egg').Controller
const Api = require('../../api/index')

class Book extends Controller {
  async detail() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(`${Api.book.detail}${ctx.params.id}`)
  }

  async recommend() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(`${Api.book.detail}${ctx.params.id}/recommend`)
  }

  async byCategories() {
    const { ctx, service } = this
    const category = ctx.params.category
    const query = ctx.query
    if (!category) {
      query.major = '玄幻'
    } else {
      query.major = category
    }
    ctx.body = await service.api.forward(Api.book.byCategories, query)
  }

  async byAuthor() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.book.byAuthor, { author: ctx.params.author })
  }

  async catalog() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(`${Api.book.catalog}${ctx.params.id}`, { view: 'chapters' })
  }

  async sources() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.book.sources, { book: ctx.params.id })
  }

  async chapter() {
    const { ctx, service } = this
    const encodeParams = encodeURIComponent(ctx.params.chapterLink)
    ctx.body = await service.api.forward(`${Api.book.chapter}${encodeParams}`)
  }

  async search() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.book.search, { query: ctx.params.query })
  }
}

module.exports = Book
