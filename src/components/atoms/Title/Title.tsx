import styled from 'styled-components'
import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.h2`
  font-family: 'bold';
  font-size: 1.8rem;
  color: ${PRIMARY_COLOR.blue};
`

type TitleProps = {
  children: React.ReactNode
}

export const Title = (props: TitleProps) => {
  return <Container>{props.children}</Container>
}
