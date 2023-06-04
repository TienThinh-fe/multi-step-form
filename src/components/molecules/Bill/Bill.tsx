import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

import { BillPlan, Separator, BillAddon, Total } from '@/components/atoms'

const Container = styled.div`
  height: fit-content;
  background-color: #f2f3f8;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0px 4px 8px rgba(163, 163, 163, 0.1);
`

export const Bill = () => {
  return (
    <>
      <Container>
        <BillPlan />
        <Separator />
        <BillAddon />
      </Container>
      <Total />
    </>
  )
}
