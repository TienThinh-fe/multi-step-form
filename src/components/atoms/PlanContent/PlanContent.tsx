import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.span`
  font-family: 'bold';
  font-size: 1.1rem;
  color: ${PRIMARY_COLOR.blue};
  text-transform: capitalize;
`

const Price = styled.span`
  font-family: 'medium';
  font-size: 0.9rem;
  color: ${PRIMARY_COLOR.grey};
`

type PlanContentProps = {
  title: string
  price: number
}

export const PlanContent = (props: PlanContentProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Price>${props.price}/mo</Price>
    </Container>
  )
}
