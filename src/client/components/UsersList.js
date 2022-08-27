import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions'

const UsersList = () => {
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

  return (
    <div>
      here will be the list:
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}

export default UsersList

export const loadData = async (store) => {
  return store.dispatch(fetchUsers())
}
