import * as Switch from '@radix-ui/react-switch'
import styled from 'styled-components'

import { PRIMARY_COLOR } from '@/components/_settings'

const Root = styled(Switch.Root)`
  width: 52px;
  height: 24px;
  background-color: ${PRIMARY_COLOR.blue};
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;

  &[data-state='checked'] {
    background-color: #0c438f;
  }

  :focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
`

const Thumb = styled(Switch.Thumb)`
  display: block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  will-change: transform;
  transform: translateX(-2px);

  &[data-state='checked'] {
    transform: translateX(22px);
  }
`

export const CustomSwitch = () => {
  return (
    <Root>
      <Thumb />
    </Root>
  )
}
