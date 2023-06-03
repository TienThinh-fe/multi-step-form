import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Text = styled.span`
  font-family: 'medium';
  font-size: 1rem;
  color: ${PRIMARY_COLOR.purple};
`

type AddonPriceProps = {
  price: number
}

export const AddonPrice = ({ price }: AddonPriceProps) => {
  return <Text>+${price}/mo</Text>
}
