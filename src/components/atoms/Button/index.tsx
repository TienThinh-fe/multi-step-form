import styled from 'styled-components'
import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: ${PRIMARY_COLOR.nextButton};
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color, scale 0.3s ease;

  &:hover {
    background-color: ${PRIMARY_COLOR.nextButtonHover};
  }

  &:active {
    scale: 0.9;
  }
`

const Text = styled.span`
  color: white;
  font-family: 'bold';
  font-size: 0.9rem;
`

type ButtonProps = {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  )
}
