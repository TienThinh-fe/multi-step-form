import { Step } from '@/components/molecules'

import { LIST_STEPS } from '@/libs/constants'

import styled from 'styled-components'

const Container = styled.div`
  height: 568px;
  background-image: url(/background.svg);
`

const ListWrapper = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  padding-top: 40px;
`

export const ListStep = () => {
  return (
    <Container>
      <ListWrapper>
        {LIST_STEPS.map((step) => (
          <Step key={step.id} order={step.order} content={step.content} />
        ))}
      </ListWrapper>
    </Container>
  )
}
