import styled from 'styled-components'

import { Header, PlanOption } from '@/components/molecules'
import { Button, Back } from '@/components/atoms'
import { ContentContainer } from './Container'

import { PLANS } from '@/libs/constants'

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Plan = () => {
  return (
    <ContentContainer>
      <Header title="Select your plan" subtitle="You have the option of monthly or yearly billing" />
      <PlanContainer>
        {PLANS.map((plan) => (
          <PlanOption key={plan.id} plan={plan} />
        ))}
      </PlanContainer>
      <ButtonContainer>
        <Back />
        <Button>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
