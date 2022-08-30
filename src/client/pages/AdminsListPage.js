import React, { useEffect } from 'react'
import { fetchAdmins } from '../actions'
import { useSelector } from 'react-redux'

const AdminsListPage = () => {
  const adminsList = useSelector(state => state.admins)
  useEffect(() => {
    fetchAdmins()
  }, [])

  return (
    <div>
      List of admins:
      <ul>
        {
          adminsList.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default AdminsListPage

export const loadData = (store) => {
  return store.dispatch(fetchAdmins())
}
