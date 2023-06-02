import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

type ContainerProps = {
  children: React.ReactNode
}

export const ContentContainer = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>
}
