'use strict'

const Service = require('egg').Service

class api extends Service {
  async forward(url, options) {
    const { data, params } = options
    const resUrl = params ? `${url}${encodeURIComponent(params)}` : url
    const res = await this.ctx.curl(resUrl, {
      dataType: 'text',
      data,
    })
    this.ctx.status = res.status
    return res.data
  }
}

module.exports = api
