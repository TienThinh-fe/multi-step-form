import styled from 'styled-components'

const Container = styled.div`
  width: 60vw;
  height: 72vh;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(126, 125, 125, 0.1);

  display: grid;
  grid-template-columns: 274px 1fr;
  padding: 20px;
`

export const MainBox = () => {
  return (
    <Container>
      <div style={{ backgroundColor: 'red' }}>Left</div>
      <div style={{ backgroundColor: 'blue' }}>Right</div>
    </Container>
  )
}
