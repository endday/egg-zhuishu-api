'use strict'

const Controller = require('egg').Controller
const Api = require('../../api/index')

class BookList extends Controller {
  async lists() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.bookList.lists)
  }

  async detail() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(`${Api.bookList.lists}/${ctx.params.listId}`)
  }
}

module.exports = BookList
