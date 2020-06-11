import React from 'react'
import { BrowserRouter, useHistory, Route, Switch } from 'react-router-dom'

import TicTacToe from './pages/tic-tac-toe/index.jsx'
import './index.css'

const Header = () => {
  const history = useHistory()
  const navbars = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'TicTacToe',
      url: '/tic-tac-toe',
    },
  ]

  return (
    <header className="navbar">
      <ul className="navbar-content">
        {navbars.map((item, key) => (
          <li
            key={key}
            className="navbar-item"
            onClick={() => history.push(item.url)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </header>
  )
}

const Home = () => (
  <main>
    <h1>Welcome to Mobile Legend</h1>
  </main>
)

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tic-tac-toe" component={TicTacToe} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
