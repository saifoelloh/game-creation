import React, { useState } from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

import Vigenere from './components/vigenere'

const Cryptograph = () => {
  const options = [
    {
      title: 'vigenere cipher',
      component: <Vigenere />,
    },
    {
      title: 'caesar cipher',
      component: <Vigenere />,
    },
  ]
  const [selectedAlgorithm, setSectedAlgorithm] = useState(options[0])

  const handleClick = (item) => {
    setSectedAlgorithm(item)
  }

  return (
    <Container className="my-5">
      <Row>
        <Col xs={3}>
          <ListGroup>
            {options.map((option, id) => (
              <ListGroupItem
                key={id}
                className="text-capitalize"
                onClick={() => handleClick(option)}
                action
              >
                {option.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col xs={9}>
          <h1 className="text-capitalize">{selectedAlgorithm.title}</h1>
          {selectedAlgorithm.component}
        </Col>
      </Row>
    </Container>
  )
}

export default Cryptograph
