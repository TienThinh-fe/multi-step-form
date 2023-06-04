import styled from 'styled-components'

import { INPUT_COLOR } from '@/components/_settings'

const Line = styled.div`
  margin: 28px 0;
  height: 2px;
  background-color: ${INPUT_COLOR.defaultBorder};
`

export const Separator = () => {
  return <Line />
}
