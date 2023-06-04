import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div<{ isActive: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease, border 0.3s ease;

  ${(props) =>
    props.isActive
      ? `
    background-color: ${PRIMARY_COLOR.sky};
    border: 1px solid transparent;
    
    span {
      color: ${PRIMARY_COLOR.blue};
    }
    `
      : `
    background-color: transparent;
    border: 1px solid #fff;

    span {
      color: #fff;
    }
    `}
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
  const activeStep = useSelector((state: any) => state.stepReducer.activeStep)

  return (
    <Container isActive={props.order === activeStep}>
      <Order>{props.order}</Order>
    </Container>
  )
}
