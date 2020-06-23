import React, { Fragment, useState } from 'react'
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'

import VigenereEncrypt from './encrypt'

const Vigenere = () => {
  const options = [
    { title: 'encrypt', component: <VigenereEncrypt /> },
    { title: 'decrypt', component: <VigenereEncrypt /> },
  ]
  const [activeTab, setActiveTab] = useState(options[0].title)
  const toggle = (tab) => setActiveTab(tab)

  return (
    <Fragment>
      <Nav tabs>
        {options.map((option, id) => (
          <NavItem key={id} className="w-50">
            <NavLink
              onClick={() => toggle(option.title)}
              active={activeTab === option.title}
            >
              {option.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {options.map((option, id) => (
          <TabPane key={id} tabId={option.title}>
            <Container fluid className="my-3">
              {option.component}
            </Container>
          </TabPane>
        ))}
      </TabContent>
    </Fragment>
  )
}

export default Vigenere
