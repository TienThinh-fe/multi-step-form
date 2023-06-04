import styled from 'styled-components'

import { Header, InfoInput } from '@/components/molecules'
import { Button } from '@/components/atoms'

import { useStep } from '@/hooks/step'

import { ContentContainer } from './Container'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Info = () => {
  const { next } = useStep()

  return (
    <ContentContainer>
      <Header title="Personal info" subtitle="Please provide your name, email address, and phone number" />
      <InfoInput />
      <ButtonContainer>
        <Button handleClick={() => next()}>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
