import React, { useState } from 'react'
import { Form, Input, Button, Title, Error } from './styles'
const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (<>
    <Title> {title} </Title>
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Input
        disabled={disabled}
        type='email' placeholder='Email'
        {...email}
      />
      <Input
        disabled={disabled}
        type='password' placeholder='Password'
        {...password}
      />
      <Button disabled={disabled}>{title}</Button>
    </Form>
    {error && <Error>{error}</Error>}
          </>)
}
