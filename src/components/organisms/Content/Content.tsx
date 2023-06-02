import styled from 'styled-components'

import { Header, InfoInput } from '@/components/molecules'
import { Button } from '@/components/atoms'

const Container = styled.div`
  width: 80%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Content = () => {
  return (
    <Container>
      <Header />
      <InfoInput />
      <ButtonContainer>
        <Button>Next Step</Button>
      </ButtonContainer>
    </Container>
  )
}
