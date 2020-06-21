import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

import TicTacToe from './pages/tic-tac-toe/index'
import Cryptograph from './pages/cryptography/index'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navbars = [
    {
      title: 'home',
      url: '/',
    },
    {
      title: 'tic tac toe',
      url: '/tic-tac-toe',
    },
    {
      title: 'cryptograph',
      url: '/cryptograph',
    },
  ]

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">HHH</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navbars.map((item, key) => (
            <NavItem key={key}>
              <NavLink tag={Link} to={item.url} className="text-capitalize">
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
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
        <Route path="/cryptograph" component={Cryptograph} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
