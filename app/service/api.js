'use strict'

const Service = require('egg').Service

class api extends Service {
  async forward(url, data) {
    const res = await this.ctx.curl(url, {
      dataType: 'text',
      data,
    })
    this.ctx.status = res.status
    console.log(res.res.headers['x-url'])
    return res.data
  }
}

module.exports = api
