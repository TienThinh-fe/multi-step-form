import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

import { useStep } from '@/hooks/step'

const Content = styled.button`
  all: unset;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  &:hover {
    span {
      color: ${PRIMARY_COLOR.nextButtonHover};
    }
  }
`

const Text = styled.span`
  font-family: 'medium';
  font-size: 0.9rem;
  color: ${PRIMARY_COLOR.grey};
  transition: color 0.3s ease;
`

export const Back = () => {
  const { prev } = useStep()

  return (
    <Content onClick={() => prev()}>
      <Text>Go Back</Text>
    </Content>
  )
}
