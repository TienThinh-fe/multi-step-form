import styled from 'styled-components'

const Container = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Order = styled.span`
  color: white;
  font-size: 1rem;
  font-family: 'bold';
`

type StepOrderProps = {
  order: number
}

export const StepOrder = (props: StepOrderProps) => {
  return (
    <Container>
      <Order>{props.order}</Order>
    </Container>
  )
}
