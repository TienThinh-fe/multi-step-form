import styled from 'styled-components'

import { ReactComponent as ArcadeIcon } from '@/assets/icons/icon-arcade.svg'
import { ReactComponent as AdvancedIcon } from '@/assets/icons/icon-advanced.svg'
import { ReactComponent as ProIcon } from '@/assets/icons/icon-pro.svg'

import { PlanContent } from '@/components/atoms'

import { INPUT_COLOR } from '@/components/_settings'
import { Plan as PlanType } from '@/models/plan'

const Container = styled.div`
  width: 22%;
  height: 120px;
  padding: 5% 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid ${INPUT_COLOR.defaultBorder};
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: none;
  transition: border 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border: 2px solid ${INPUT_COLOR.activeBorder};
    background-color: #fbfbfb;
    box-shadow: 0px 4px 8px rgba(192, 192, 192, 0.1);
  }
`

type PlanOptionProps = {
  plan: PlanType
}

const MAPPING_ICONS = {
  arcade: <ArcadeIcon />,
  advanced: <AdvancedIcon />,
  pro: <ProIcon />
}

export const PlanOption = ({ plan }: PlanOptionProps) => {
  return (
    <Container>
      {MAPPING_ICONS[plan.title as keyof typeof MAPPING_ICONS]}
      <PlanContent title={plan.title} price={plan.price} />
    </Container>
  )
}
