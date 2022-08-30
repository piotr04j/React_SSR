import React from 'react'

const NotFoundPage = ({ staticContext = {}}) => {
  console.log(staticContext)
  staticContext.notFound = true
  return <h1 className="center-align" style={{ marginTop: '100px' }}>Page not found.</h1>
}

export default NotFoundPage
