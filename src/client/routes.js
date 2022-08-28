import React from 'react'
import * as Home from './pages/HomePage'
import * as UsersList  from './pages/UsersListPage'

const routes = [
  {
    path: '/',
    component: Home.default,
    exact: true
  },
  {
    path: '/users',
    component: UsersList.default,
    loadData: UsersList.loadData
  }
]

export default routes
