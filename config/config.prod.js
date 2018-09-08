'use strict'

module.exports = () => {
  const config = exports = {}

  config.cluster = {
    listen: {
      port: 80,
    },
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET',
  }

  return config
}
