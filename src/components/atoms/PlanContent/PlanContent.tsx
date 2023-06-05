import styled from 'styled-components'
import { useSelector } from 'react-redux'

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

const Discount = styled.span`
  font-family: 'medium';
  font-size: 0.8rem;
  color: ${PRIMARY_COLOR.blue};
`

type PlanContentProps = {
  title: string
  price: number
}

export const PlanContent = (props: PlanContentProps) => {
  const plan = useSelector((state: any) => state.planReducer.plan)

  return (
    <Container>
      <Title>{props.title}</Title>
      <Price>{plan === 'yearly' ? `$${props.price * 10}/yr` : `$${props.price}/mo`}</Price>
      <Discount>{plan === 'yearly' ? '2 months free' : ''}</Discount>
    </Container>
  )
}
