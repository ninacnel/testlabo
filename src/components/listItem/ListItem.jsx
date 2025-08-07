import React from 'react'

const ListItem = ({ name, price }) => {
  return (
    <h4>{name} - ${price * 5}</h4>
  )
}

export default ListItem