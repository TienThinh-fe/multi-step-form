import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Name = styled.span`
  font-family: 'bold';
  font-size: 1.2rem;
  color: ${PRIMARY_COLOR.blue};
`

const Description = styled.span`
  font-family: 'medium';
  font-size: 1rem;
  color: ${PRIMARY_COLOR.grey};
`

type AddonContentProps = {
  name: string
  description: string
}

export const AddonContent = (props: AddonContentProps) => {
  return (
    <Container>
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </Container>
  )
}
