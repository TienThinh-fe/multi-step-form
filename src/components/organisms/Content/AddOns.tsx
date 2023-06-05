import { useState } from 'react'
import styled from 'styled-components'

import { Header, AddonOption } from '@/components/molecules'
import { Button, Back } from '@/components/atoms'

import { ContentContainer } from './Container'

import { ADDONS } from '@/libs/constants'
import { useStep } from '@/hooks/step'

const AddonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -40px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddOns = () => {
  const [checkedAddons, setCheckedAddons] = useState<number[]>([])

  const { next } = useStep()

  return (
    <ContentContainer>
      <Header title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience" />
      <AddonsContainer>
        {ADDONS.map((addon) => (
          <AddonOption
            key={addon.id}
            id={addon.id}
            name={addon.name}
            price={addon.price}
            description={addon.description}
            isChecked={checkedAddons.includes(addon.id)}
            setCheckedAddons={() => {
              if (checkedAddons.includes(addon.id)) {
                setCheckedAddons(checkedAddons.filter((checkedAddon) => checkedAddon !== addon.id))
              } else {
                setCheckedAddons([...checkedAddons, addon.id])
              }
            }}
          />
        ))}
      </AddonsContainer>
      <ButtonContainer>
        <Back />
        <Button handleClick={() => next()}>Next Step</Button>
      </ButtonContainer>
    </ContentContainer>
  )
}
