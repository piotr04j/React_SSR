import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const authState = useSelector( state => state.auth)
  const isLogged = authState || false

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {isLogged ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>}
      </div>
    </div>
  )
}

export default Header
