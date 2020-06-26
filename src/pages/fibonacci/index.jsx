import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  Container,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'

import { fibonacci } from './controller/index.js'

const Fibonacci = () => {
  const [fibo, setFibo] = useState(0)
  const [result, setResult] = useState(0)

  const clickHandler = () => {
    const len = parseInt(fibo)
    const arr = Array(len + 1).fill(null)
    const temp = fibonacci(len, arr)
    setResult(temp)
  }

  return (
    <Container className="h-100 my-5">
      <Card>
        <CardBody>
          <FormGroup>
            <Label>Angka ke-N</Label>
            <Input
              type="number"
              name="limit"
              onChange={({ target }) => setFibo(target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Hasil</Label>
            <Input type="text" name="limit" value={result} disabled />
          </FormGroup>
          <FormGroup>
            <Button color="primary" block onClick={clickHandler}>
              Submit
            </Button>
          </FormGroup>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Fibonacci
