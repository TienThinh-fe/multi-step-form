import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import styled from 'styled-components'

import { Header, PlanOption, PlanSwitch } from '@/components/molecules'
import { Button, Back } from '@/components/atoms'
import { ContentContainer } from './Container'

import { PLANS } from '@/libs/constants'
import { useStep } from '@/hooks/step'
import isEmpty from 'lodash.isempty'

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
  const info = useSelector((state: any) => state.infoReducer)
  const dispatch = useDispatch()

  const [activePlan, setActivePlan] = useState(isEmpty(info.selectedPlan) ? PLANS[0].id : info.selectedPlan.id)
  const { next } = useStep()

  const handleClickNext = () => {
    next()
    dispatch({
      type: 'SET_PLAN',
      payload: {
        plan: PLANS.find((plan) => plan.id === activePlan)
      }
    })
  }

  return (
    <ContentContainer>
      <Header title="Select your plan" subtitle="You have the option of monthly or yearly billing" />
      <Wrapper>
        <PlanContainer>
          {PLANS.map((plan) => (
            <PlanOption
              key={plan.id}
              plan={plan}
              isActive={activePlan === plan.id}
              handleClick={() => setActivePlan(plan.id)}
            />
          ))}
        </PlanContainer>
        <PlanSwitch />
      </Wrapper>
      <ButtonContainer>
        <Back />
        <Button handleClick={handleClickNext}>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
