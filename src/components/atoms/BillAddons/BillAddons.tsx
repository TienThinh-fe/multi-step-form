import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.span`
  font-size: 1.05rem;
  color: ${PRIMARY_COLOR.grey};
  font-family: 'medium';
`

const Price = styled.span`
  font-size: 1rem;
  color: ${PRIMARY_COLOR.blue};
  font-family: 'medium';
`

export const BillAddon = () => {
  return (
    <Container>
      <Wrapper>
        <Name>Online service</Name>
        <Price>+$1/mo</Price>
      </Wrapper>
      <Wrapper>
        <Name>Online service</Name>
        <Price>+$1/mo</Price>
      </Wrapper>
    </Container>
  )
}
