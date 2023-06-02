import styled from 'styled-components'

import { Title, Subtitle } from '@/components/atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`

export const Header = () => {
  return (
    <Container>
      <Title>Personal info</Title>
      <Subtitle>Please provide your name, email address, and phone number</Subtitle>
    </Container>
  )
}
