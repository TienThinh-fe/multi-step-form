import styled from 'styled-components'

import { Plan, ListStep } from '@/components/organisms'

const Container = styled.div`
  width: 50vw;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(126, 125, 125, 0.1);

  display: grid;
  grid-template-columns: 274px 1fr;
  padding: 20px;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const MainBox = () => {
  return (
    <Container>
      <ListStep />

      <ContentContainer>
        <Plan />
      </ContentContainer>
    </Container>
  )
}
