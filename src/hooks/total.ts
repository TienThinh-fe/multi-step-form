import { useSelector } from 'react-redux'

export function useTotal() {
  const info = useSelector((state: any) => state.infoReducer)
  const plan = useSelector((state: any) => state.planReducer.plan)

  const total = info.selectedPlan.price + info.addons.reduce((acc: number, addon: any) => acc + addon.price, 0)

  return {
    total
  }
}
