import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

import { ReactComponent as TickIcon } from '@/assets/icons/tick.svg'

const Root = styled(Checkbox.Root)`
  all: unset;
  background-color: white;
  width: 25px;
  height: 25px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[data-state='checked'] {
    background-color: #4341fb;
  }

  &:focus {
    outline: none;
  }
`

const Indicator = styled(Checkbox.Indicator)`
  color: red;
`

type CustomCheckboxProps = {
  isChecked: boolean
}

export const CustomCheckbox = ({ isChecked }: CustomCheckboxProps) => {
  return (
    <Root>
      <Indicator>
        <TickIcon />
      </Indicator>
    </Root>
  )
}
