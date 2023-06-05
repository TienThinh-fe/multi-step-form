const nextStep = () => ({ type: 'NEXT_STEP' })

const prevStep = () => ({ type: 'PREV_STEP' })

const switchPlan = () => ({ type: 'SWITCH_PLAN' })

const setName = (name: string) => ({ type: 'SET_NAME', name })

const setEmail = (email: string) => ({ type: 'SET_EMAIL', email })

const setPhone = (phone: string) => ({ type: 'SET_PHONE', phone })

const setPersonalInfo = (name: string, email: string, phone: string) => ({
  type: 'SET_PERSONAL_INFO',
  name,
  email,
  phone
})

export { nextStep, prevStep, switchPlan, setName, setEmail, setPhone, setPersonalInfo }
