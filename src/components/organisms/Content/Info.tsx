import styled from 'styled-components'

import { Header, InfoInput } from '@/components/molecules'
import { Button } from '@/components/atoms'

import { ContentContainer } from './Container'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Info = () => {
  return (
    <ContentContainer>
      <Header title="Personal info" subtitle="Please provide your name, email address, and phone number" />
      <InfoInput />
      <ButtonContainer>
        <Button>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
