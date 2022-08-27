import React from 'react'
import Home from './components/Home'
import UsersList from './components/UsersList'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: 'users',
    component: UsersList,
  }
]

export default routes
