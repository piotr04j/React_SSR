import React from 'react'
import App from './App'
import * as Home from './pages/HomePage'
import * as UsersList  from './pages/UsersListPage'

const routes = [
  {
    component: App,
    routes: [
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
  }
]

export default routes
