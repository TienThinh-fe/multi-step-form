import styled from 'styled-components'

import { Header, InfoInput } from '@/components/molecules'

import { ContentContainer } from './Container'
import { PRIMARY_COLOR } from '@/components/_settings'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: ${PRIMARY_COLOR.nextButton};
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, scale 0.4s ease;

  &:hover {
    background-color: ${PRIMARY_COLOR.nextButtonHover};
  }

  &:active {
    scale: 0.95;
  }
`

const Text = styled.span`
  color: white;
  font-family: 'medium';
  font-size: 0.9rem;
`

export const Info = () => {
  return (
    <ContentContainer>
      <Header title="Personal info" subtitle="Please provide your name, email address, and phone number" />
      <InfoInput />
      <ButtonContainer>
        <Button type="submit" form="form">
          <Text>Next Step</Text>
        </Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
