import express from 'express'
import React from 'react'
import renderer from './helpers/render'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {

  res.send(renderer(req))
})

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
