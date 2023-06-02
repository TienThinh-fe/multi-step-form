import styled from 'styled-components'

import { Header } from '@/components/molecules'

const Container = styled.div`
  width: 84%;
  height: 92%;
`

export const Content = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}
