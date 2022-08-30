import React from 'react'
import * as App from './App'
import * as Home from './pages/HomePage'
import * as UsersList  from './pages/UsersListPage'

const routes = [
  {
    component: App.default,
    loadData: App.loadData,
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
