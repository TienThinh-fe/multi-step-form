import { combineReducers } from 'redux'

type StateType = {
  activeStep: number
}

const initialState: StateType = {
  activeStep: 1
}

const stepReducer = (state = initialState, action: any) => {
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

const rootReducer = combineReducers({
  stepReducer
})

export default rootReducer
