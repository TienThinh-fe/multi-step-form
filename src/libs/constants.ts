import { Plan } from '@/models/plan'
import { Addons } from '@/models/addons'
import { Step } from '@/models/step'

const STEPS: Step[] = [
  {
    id: 1,
    order: 1,
    content: 'your info'
  },
  {
    id: 2,
    order: 2,
    content: 'select plan'
  },
  {
    id: 3,
    order: 3,
    content: 'add-ons'
  },
  {
    id: 4,
    order: 4,
    content: 'summary'
  }
]

const PLANS: Plan[] = [
  {
    id: 1,
    title: 'arcade',
    price: 9
  },
  {
    id: 2,
    title: 'advanced',
    price: 12
  },
  {
    id: 3,
    title: 'pro',
    price: 15
  }
]

const ADDONS: Addons[] = [
  {
    id: 1,
    name: 'Online service',
    price: 1,
    description: 'Access to multiplayer games',
    isChecked: false
  },
  {
    id: 2,
    name: 'Larger storage',
    price: 2,
    description: 'Extra 1TB of cloud save',
    isChecked: false
  },
  {
    id: 3,
    name: 'Customizable Profile',
    price: 2,
    description: 'Customize theme on your profile',
    isChecked: false
  }
]

export { STEPS, PLANS, ADDONS }
