import React from 'react'

const HomePage = () => {
  return (
    <div>
      I'm the home component!
      <button onClick={() => {
        console.log('hi there')
      }}>Press me</button>
    </div>
  )
}

export default HomePage
