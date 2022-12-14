import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const authState = useSelector( state => state.auth)
  const isLogged = authState || false

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React SSR</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link>></li>
          <li>{isLogged ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
