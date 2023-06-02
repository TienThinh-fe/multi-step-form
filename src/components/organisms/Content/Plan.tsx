import styled from 'styled-components'

import { Header, PlanOption, PlanSwitch } from '@/components/molecules'
import { Button, Back } from '@/components/atoms'
import { ContentContainer } from './Container'

import { PLANS } from '@/libs/constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: -120px;
`

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
      <Wrapper>
        <PlanContainer>
          {PLANS.map((plan) => (
            <PlanOption key={plan.id} plan={plan} />
          ))}
        </PlanContainer>
        <PlanSwitch />
      </Wrapper>
      <ButtonContainer>
        <Back />
        <Button>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
