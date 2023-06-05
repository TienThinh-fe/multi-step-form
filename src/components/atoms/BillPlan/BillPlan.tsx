import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Plan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const PlanName = styled.span`
  font-size: 1.25rem;
  font-family: 'bold';
  color: ${PRIMARY_COLOR.blue};
  text-transform: capitalize;
`

const ChangeButton = styled.button`
  all: unset;
  display: inline;
  font-family: 'medium';
  cursor: pointer;
  padding: 2px;

  span {
    font-size: 0.9rem;
    color: ${PRIMARY_COLOR.grey};
  }

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`

const Price = styled.span`
  font-size: 1.15rem;
  font-family: 'bold';
  color: ${PRIMARY_COLOR.blue};
`

export const BillPlan = () => {
  const { selectedPlan } = useSelector((state: any) => state.infoReducer)
  const plan = useSelector((state: any) => state.planReducer.plan)

  return (
    <Container>
      <Plan>
        <PlanName>
          {selectedPlan.title} ({plan})
        </PlanName>
        <ChangeButton>
          <span>Change</span>
        </ChangeButton>
      </Plan>
      <Price>{plan === 'monthly' ? '$' + selectedPlan.price + '/mo' : '$' + selectedPlan.price * 10 + '/yr'}</Price>
    </Container>
  )
}
