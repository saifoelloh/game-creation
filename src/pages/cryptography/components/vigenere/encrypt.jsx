import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const VigenereEncrypt = () => {
  return (
    <Form>
      <FormGroup>
        <Label>PlainText</Label>
        <Input type="textarea" name="plaintext" />
      </FormGroup>
      <FormGroup>
        <Label>Key</Label>
        <Input type="textarea" name="key" />
      </FormGroup>
      <FormGroup>
        <Label>CipherText</Label>
        <Input type="textarea" name="ciphertext" />
      </FormGroup>
      <FormGroup>
        <Button color="primary" block>
          Encrypt
        </Button>
      </FormGroup>
    </Form>
  )
}

export default VigenereEncrypt
