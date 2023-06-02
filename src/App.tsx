import { Button, Title, Subtitle, Input } from './components/atoms'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState<string>('')

  return (
    <div className="App">
      <Button>Next Step</Button>
      <Title>Personal info</Title>
      <Subtitle>Use a permanent address where you can receive mail.</Subtitle>
      <Input placeholder="First Name" text={firstName} setText={setFirstName} label="first name" />
    </div>
  )
}

export default App
