'use strict'

const Service = require('egg').Service

class api extends Service {
  async forward(url, data) {
    const result = await this.ctx.curl(url, {
      dataType: 'json',
      data,
    })
    return result.data
  }
}

module.exports = api
