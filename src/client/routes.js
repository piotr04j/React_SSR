import React from 'react'
import * as App from './App'
import * as Home from './pages/HomePage'
import * as UsersList  from './pages/UsersListPage'
import * as AdminsListPage from './pages/AdminsListPage'
import NotFoundPage from './pages/NotFoundPage'

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
      },
      {
        path: '/admins',
        component: AdminsListPage.default,
        loadData: AdminsListPage.loadData
      },
      {
        component: NotFoundPage
      }
    ]
  }
]

export default routes
