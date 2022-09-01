import React, { useEffect } from 'react'
import { fetchAdmins } from '../actions'
import { useSelector } from 'react-redux'
import RequireAuth from '../components/HOCs/RequireAuth'

const AdminsListPage = (props) => {
  const adminsList = useSelector(state => state.admins)
  console.log(props)
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


export default RequireAuth(AdminsListPage)

export const loadData = (store) => {
  return store.dispatch(fetchAdmins())
}
