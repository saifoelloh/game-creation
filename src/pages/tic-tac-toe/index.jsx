import React, { useCallback, useEffect, useState } from 'react'

import Square from './components/square'
import { checkMovement, checkSelection } from './controller/path'
import { CheckPossibilities } from './controller/path.js'
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
    const new_tics = [
      ...tics.map((items = [], id = 0) =>
        items.map((item = Object, idx = 0) =>
          row === id && col === idx ? { player, status: !item.status } : item,
        ),
      ),
    ]

    if (!win) {
      if (checkSelection(row, col, tics)) {
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

  const checkPossibilities = () => {
    // verticalPath
    const avail = tics.map((row = [], x) => {
      const foo = row.filter(({ player = '', status = false }, y) =>
        player === '' ? { x, y } : player !== 'human' ? 1 : -1,
      )
    })
    // horizontalPath
    // crossPath
    console.table(avail)
  }

  const computerMovement = () => {
    checkPossibilities()
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
    setTurn(0)
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
                <Square
                  key={idx}
                  onClick={() => handleClick(id, idx)}
                  player={col.player}
                />
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
