'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title
const port = process.env.port || process.env.npm_config_port || 9528 // dev port
// cli生成的项目会自动带截取掉'web-'前缀的环境变量
const publicPath = '/'
module.exports = {
  publicPath: publicPath,
  outputDir: process.env.VUE_APP_BASE_NAME,
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '^/api/*': {
        // target: 'http://192.168.1.79:9999',
        target: 'http://10.1.1.156:9999/cpod/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '^/hj/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/hj': 'hj'
        }
      },
      '^/cpod/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/cpod': 'cpod'
        }
      },
      '^/knowledge/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/knowledge': 'knowledge'
        }
      },
      '^/syscenter/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true
      },
      '^/review/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/review': 'review'
        }
      },
      '^/download/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/download': 'download'
        }
      },
      '^/web/*': {
        target: 'http://10.1.1.156:9999',
        secure: false,
        changeOrigin: true
      }
    }
    // before: require('./mock/mock-server.js'),
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined,
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
