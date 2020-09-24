import React, { useState } from 'react'
import { Form, Input, Title, Error } from './styles'
import { SubmintButton } from '../SubmitButton'

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
      <SubmintButton disabled={disabled}>{title}</SubmintButton>
    </Form>
    {error && <Error>{error}</Error>}
  </>)
}
