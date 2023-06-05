import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Info, Plan, AddOns, Finish, ListStep } from '@/components/organisms'

const Container = styled.div`
  width: 50vw;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(126, 125, 125, 0.1);

  display: grid;
  grid-template-columns: 274px 1fr;
  padding: 20px;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  overflow: hidden;
`

const MAPPING_CONTENT = {
  1: <Info />,
  2: <Plan />,
  3: <AddOns />,
  4: <Finish />
}

export const MainBox = () => {
  const activeStep = useSelector((state: any) => state.stepReducer.activeStep)

  return (
    <Container>
      <ListStep />

      <ContentContainer>{MAPPING_CONTENT[activeStep as keyof typeof MAPPING_CONTENT]}</ContentContainer>
    </Container>
  )
}
