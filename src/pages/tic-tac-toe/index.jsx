import React, { useCallback, useEffect, useState } from 'react'

import { checkMovement, checkSelection } from './controller/path'
import '../../index.css'

const TicTacToe = () => {
  const [tics, setTics] = useState([...Array(3).fill([])])
  const [loading, setLoading] = useState(true)
  const [win, setWin] = useState(false)
  const [turn, setTurn] = useState(0)
  const players = [
    {
      name: 'human',
      win: false,
    },
    {
      name: 'computer',
      win: false,
    },
  ]

  const winnerCheck = (player = '', new_tics = []) => {
    const result = checkMovement(new_tics, player)
    if (result) {
      const message = player === 'human' ? 'Human win' : 'Looser'
      alert(message)
      setWin(!win)
    }
  }

  const handleClick = (row = -1, col = -1) => {
    const player = players[turn].name
    if (!win) {
      if (checkSelection(row, col, tics)) {
        const new_tics = [
          ...tics.map((items, id) =>
            items.map((item, idx) =>
              row === id && col === idx
                ? { player, status: !item.status }
                : item,
            ),
          ),
        ]
        setTics(new_tics)
        winnerCheck(player, new_tics)
        setTurn(turn > 0 ? 0 : 1)
      } else {
        if (player === 'computer') {
          computerMovement()
        } else {
          alert('Are you okay, human ?')
        }
      }
    } else {
      alert('no movement available')
    }
  }

  const computerMovement = () => {
    if (players[turn].name === 'computer' && !win) {
      const xrand = Math.round(Math.random() * Math.floor(2))
      const yrand = Math.round(Math.random() * Math.floor(2))
      handleClick(xrand, yrand)
    }
  }

  const resetTics = useCallback(() => {
    const temp = tics.map(() =>
      Array(3).fill({
        player: '',
        status: false,
      }),
    )
    setTics([...temp])
    setWin(false)
  }, [tics])

  useEffect(() => {
    if (loading) {
      resetTics()
    }
    setLoading(false)
    computerMovement()
  }, [loading, tics, turn])

  return (
    <main>
      <h1>TicTacToe</h1>
      {loading ? (
        'loading'
      ) : (
        <div className="square">
          {tics.map((row, id) => (
            <section key={id} className="tictactoe">
              {row.map((col, idx) => (
                <div
                  key={idx}
                  className="tictactoe-item"
                  onClick={() => handleClick(id, idx)}
                  style={{
                    backgroundColor: 'lightyellow',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                  }}
                >
                  {col.player === '' ? '' : col.player === 'human' ? 'X' : 'O'}
                </div>
              ))}
            </section>
          ))}
        </div>
      )}
      <button onClick={resetTics}>RESET</button>
    </main>
  )
}

export default TicTacToe
