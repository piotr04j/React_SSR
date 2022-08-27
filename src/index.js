import 'babel-polyfill'
import express from 'express'
import React from 'react'
import renderer from './helpers/renderer'
import createServerStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import routes from './client/routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createServerStore()
  const loadDataPromises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store)
  })

  Promise.all(loadDataPromises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
