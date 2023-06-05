import styled from 'styled-components'
import { useTotal } from '@/hooks/total'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
`

const Text = styled.span`
  font-size: 1.1rem;
  font-family: 'medium';
  color: ${PRIMARY_COLOR.grey};
`

const Price = styled.span`
  font-size: 1.25rem;
  font-family: 'bold';
  color: #443cfa;
`

export const Total = () => {
  const { total } = useTotal()

  return (
    <Container>
      <Text>Total (per month)</Text>
      <Price>${total}/mo</Price>
    </Container>
  )
}
