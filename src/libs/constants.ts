import { Plan } from '@/models/plan'

const STEPS = [
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

export { STEPS, PLANS }
