import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  cursor:pointer;
  background: linear-gradient(#a590ff, #46b52b);
  border-radius: 60px;
  color: #fff;
  height: 32px;
  width: 120px;
  display: block;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`
