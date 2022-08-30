import 'babel-polyfill'
import express from 'express'
import React from 'react'
import renderer from './helpers/renderer'
import createServerStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import routes from './client/routes'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createServerStore(req)
  const loadDataPromises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store)
  })

  Promise.all(loadDataPromises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if(context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
