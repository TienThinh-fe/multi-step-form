import styled from 'styled-components'

import { AddonContent, AddonPrice, CustomCheckbox } from '@/components/atoms'

import { INPUT_COLOR } from '@/components/_settings'

const Container = styled.div`
  height: 80px;
  background-color: white;
  border: 3px solid ${INPUT_COLOR.defaultBorder};
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: none;
  transition: border 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  display: grid;
  grid-template-columns: 12% auto 20%;
  align-items: center;
  padding: 0 24px;

  &:hover {
    border: 3px solid ${INPUT_COLOR.activeBorder};
    background-color: #f8f9fe;
    box-shadow: 0px 4px 8px rgba(192, 192, 192, 0.1);
  }
`

type AddonOptionProps = {
  id: number
  name: string
  price: number
  description: string
  isChecked: boolean
  setCheckedAddons: () => void
}

export const AddonOption = (props: AddonOptionProps) => {
  return (
    <Container onClick={props.setCheckedAddons}>
      <CustomCheckbox isChecked={props.isChecked} />
      <AddonContent name={props.name} description={props.description} />
      <AddonPrice price={props.price} />
    </Container>
  )
}
