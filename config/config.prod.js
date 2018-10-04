'use strict'

module.exports = () => {
  const config = exports = {}

  config.cluster = {
    listen: {
      port: 4000,
    },
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET',
  }

  return config
}
