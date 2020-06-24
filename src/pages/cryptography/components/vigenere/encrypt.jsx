import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import { getCode, keyGenerator } from './controller.js'

const VigenereEncrypt = () => {
  const [plaintext, setPlaintext] = useState('')
  const [key, setKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')

  const encryption = () => {
    const plain = plaintext.toLowerCase()
    const k = key.toLowerCase()
    const generatedKey = keyGenerator(k, plain)
    const result = plain.split('').map((currectChar, id) => {
      const cId = getCode(currectChar)
      const kId = getCode(generatedKey[id])
      const rId = (cId + kId) % 26
      return String.fromCharCode(rId + 97)
    })
    setCiphertext(result.join(''))
  }

  return (
    <Form>
      <FormGroup>
        <Label>PlainText</Label>
        <Input
          type="textarea"
          name="plaintext"
          onChange={({ target }) => setPlaintext(target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Key</Label>
        <Input
          type="textarea"
          name="key"
          onChange={({ target }) => setKey(target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>CipherText</Label>
        <Input type="textarea" name="ciphertext" value={ciphertext} disabled />
      </FormGroup>
      <FormGroup>
        <Button color="primary" block onClick={encryption}>
          Encrypt
        </Button>
      </FormGroup>
    </Form>
  )
}

export default VigenereEncrypt
