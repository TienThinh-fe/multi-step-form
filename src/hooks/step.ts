import { useDispatch } from 'react-redux'

export const useStep = () => {
  const dispatch = useDispatch()
  return {
    next: () => dispatch({ type: 'NEXT_STEP' }),
    prev: () => dispatch({ type: 'PREV_STEP' })
  }
}
