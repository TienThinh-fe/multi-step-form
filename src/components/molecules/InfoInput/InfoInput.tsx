import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Input } from '@/components/atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: -80px;
`

export const InfoInput = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = useCallback((key: string, value: string) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value
    }))
  }, [])

  return (
    <Container>
      <Input
        placeholder="e.g. Tien Thinh"
        label="Name"
        infoKey={Object.keys(info)[0]}
        value={info.name}
        setValue={handleChange}
      />
      <Input
        placeholder="e.g. thinh@gmail.com"
        label="Email Address"
        infoKey={Object.keys(info)[1]}
        value={info.email}
        setValue={handleChange}
      />
      <Input
        placeholder="e.g. 0123456789"
        label="Phone Number"
        infoKey={Object.keys(info)[2]}
        value={info.phone}
        setValue={handleChange}
      />
    </Container>
  )
}
