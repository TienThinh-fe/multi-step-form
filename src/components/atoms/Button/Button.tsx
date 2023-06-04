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
  transition: background-color 0.3s ease, scale 0.4s ease;

  &:hover {
    background-color: ${PRIMARY_COLOR.nextButtonHover};
  }

  &:active {
    scale: 0.95;
  }
`

const Text = styled.span`
  color: white;
  font-family: 'medium';
  font-size: 0.9rem;
`

type ButtonProps = {
  children: React.ReactNode
  className?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <Container className={props.className}>
      <Text>{props.children}</Text>
    </Container>
  )
}
