import React from 'react'

import '../../../index.css'

const Square = (props) => {
  const { onClick, player } = props
  return (
    <div
      className="tictactoe-item"
      onClick={onClick}
      style={{
        backgroundColor: 'lightyellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5rem',
      }}
    >
      {player === '' ? '' : player === 'human' ? 'X' : 'O'}
    </div>
  )
}

export default Square
