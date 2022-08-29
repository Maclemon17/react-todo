import React from 'react'

const Button = ({ Text, Type, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-${Type}`}>
      {Text}
    </button>
  )
}

export default Button