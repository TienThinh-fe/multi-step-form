import { combineReducers } from 'redux'

type StepState = {
  activeStep: number
}

type PlanState = {
  plan: 'monthly' | 'yearly'
}

type InfoState = {
  name: string
  email: string
  phone: string
}

const stepState: StepState = {
  activeStep: 1
}

const planState: PlanState = {
  plan: 'monthly'
}

const infoState: InfoState = {
  name: '',
  email: '',
  phone: ''
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

const infoReducer = (state = infoState, action: any) => {
  switch (action.type) {
    case 'SET_INFO':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stepReducer,
  planReducer,
  infoReducer
})

export default rootReducer
