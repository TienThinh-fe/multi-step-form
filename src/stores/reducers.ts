import { combineReducers } from 'redux'

type StepState = {
  activeStep: number
}

type PlanState = {
  plan: 'monthly' | 'yearly'
}

const stepState: StepState = {
  activeStep: 1
}

const planState: PlanState = {
  plan: 'monthly'
}

const stepReducer = (state = stepState, action: any) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'PREV_STEP':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    default:
      return state
  }
}

const planReducer = (state = planState, action: any) => {
  switch (action.type) {
    case 'SWITCH_PLAN':
      return {
        ...state,
        plan: state.plan === 'monthly' ? 'yearly' : 'monthly'
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stepReducer,
  planReducer
})

export default rootReducer
