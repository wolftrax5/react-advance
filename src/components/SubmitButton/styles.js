import styled from 'styled-components'

export const Button = styled.button`
cursor:pointer;
background: linear-gradient(#a590ff, #46b52b);
border-radius: 60px;
color: #fff;
height: 32px;
width: 120px;
display: block;
text-align: center;
&[disabled]{
  opacity: 0.3;
}
`
