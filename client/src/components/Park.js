import React from 'react'

const Park = ({park}) => {

  return (
    <div>
      <h1>{park.name}</h1>
      <h3>{park.states}</h3>
      <p>{park.description}></p>
      <button>Add To Favorites</button>
    </div>
  )
}

export default Park
