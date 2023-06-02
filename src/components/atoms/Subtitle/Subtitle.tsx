import styled from 'styled-components'
import { PRIMARY_COLOR } from '@/components/_settings'

const Container = styled.h3`
  font-family: 'regular';
  font-size: 1.2rem;
  color: ${PRIMARY_COLOR.grey};
`

type SubtitleProps = {
  children: string
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return <Container>{children}</Container>
}
