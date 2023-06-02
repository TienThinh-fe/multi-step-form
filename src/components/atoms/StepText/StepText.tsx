import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Order = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: 'medium';
  color: ${PRIMARY_COLOR.grey};
`

const Content = styled.span`
  text-transform: uppercase;
  font-family: 'bold';
  color: ${PRIMARY_COLOR.white};
  letter-spacing: 1px;
`

type StepTextProps = {
  order: number
  content: string
}

export const StepText = (props: StepTextProps) => {
  return (
    <Container>
      <Order>Step {props.order}</Order>
      <Content>{props.content}</Content>
    </Container>
  )
}
