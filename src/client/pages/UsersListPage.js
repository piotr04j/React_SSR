import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

const UsersListPage = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const renderUsers = () => {
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  const head = () => {
    return (
      <Helmet>
        <title>Users App</title>
        <meta property="og:title" content="User App" />
      </Helmet>
    )
  }

  return (
    <div>
      {head()}
      here will be the list:
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}

export default UsersListPage

export const loadData = (store) => {
  return store.dispatch(fetchUsers())
}
