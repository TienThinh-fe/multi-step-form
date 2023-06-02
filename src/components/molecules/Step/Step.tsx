import { StepOrder, StepText } from '@/components/atoms'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`

type StepProps = {
  order: number
  content: string
}

export const Step = (props: StepProps) => {
  return (
    <Container>
      <StepOrder order={props.order} />
      <StepText order={props.order} content={props.content} />
    </Container>
  )
}
