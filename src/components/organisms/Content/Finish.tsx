import styled from 'styled-components'

import { Button, Back } from '@/components/atoms'
import { Header, Bill } from '@/components/molecules'

import { ContentContainer } from './Container'

const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -40px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonConfirm = styled(Button)`
  background-color: #443cfa;

  &:hover {
    background-color: #554be9;
  }
`

export const Finish = () => {
  return (
    <ContentContainer>
      <Header title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience" />
      <BillContainer>
        <Bill />
      </BillContainer>
      <ButtonContainer>
        <Back />
        <ButtonConfirm>Confirm</ButtonConfirm>
      </ButtonContainer>
    </ContentContainer>
  )
}
