import styled from 'styled-components'

import { MainBox } from '@/components/templates'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef5ff;
`

function App() {
  return (
    <AppContainer>
      <MainBox />
    </AppContainer>
  )
}

export default App
