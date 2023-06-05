import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

import { Addons as AddonsType } from '@/models/addons'

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
  const { addons } = useSelector((state: any) => state.infoReducer)
  const plan = useSelector((state: any) => state.planReducer.plan)

  return (
    <Container>
      {addons.map((addon: AddonsType) => (
        <Wrapper key={addon.id}>
          <Name>{addon.name}</Name>
          <Price>{plan === 'monthly' ? `+$${addon.price}/mo` : `$${addon.price * 10}/yr`}</Price>
        </Wrapper>
      ))}
    </Container>
  )
}
