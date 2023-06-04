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
  return (
    <Container>
      <Plan>
        <PlanName>Arcade (Monthly)</PlanName>
        <ChangeButton>
          <span>Change</span>
        </ChangeButton>
      </Plan>
      <Price>$9/mo</Price>
    </Container>
  )
}
