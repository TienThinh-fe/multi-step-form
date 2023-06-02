import styled from 'styled-components'

import { CustomSwitch } from '@/components/atoms'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  background: #f8f9fe;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 24px;
`

const Text = styled.span<{ isActive?: boolean }>`
  font-family: 'bold';
  font-size: 0.9rem;
  color: ${({ isActive }) => (isActive ? PRIMARY_COLOR.blue : PRIMARY_COLOR.grey)};
`

export const PlanSwitch = () => {
  return (
    <Container>
      <Text isActive>Monthly</Text>
      <CustomSwitch />
      <Text>Yearly</Text>
    </Container>
  )
}
