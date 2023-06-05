import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Input } from '@/components/atoms'
import { useStep } from '@/hooks/step'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: -80px;
`

type FormValues = {
  name: string
  email: string
  phone: string
}

export const InfoInput = () => {
  const info = useSelector((state: any) => state.infoReducer)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: info.name,
      email: info.email,
      phone: info.phone
    }
  })

  const { next } = useStep()

  const onSubmit = (data: FormValues) => {
    next()
    dispatch({
      type: 'SET_PERSONAL_INFO',
      payload: {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    })
  }

  return (
    <Container id="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="e.g. Tien Thinh"
        label="Name"
        register={register}
        name="name"
        validationSchema={{
          required: 'This field is required'
        }}
        errors={errors}
      />
      <Input
        placeholder="e.g. thinh@gmail.com"
        label="Email Address"
        register={register}
        name="email"
        errors={errors}
        validationSchema={{
          required: 'This field is required',
          pattern: {
            value:
              /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.(-?[a-zA-Z0-9])+$/,
            message: 'Invalid email'
          }
        }}
      />
      <Input
        placeholder="e.g. 0123456789"
        label="Phone Number"
        register={register}
        name="phone"
        errors={errors}
        validationSchema={{
          required: 'This field is required',
          pattern: {
            value: /^0[0-9]{9}$/,
            message: 'Invalid phone number'
          }
        }}
      />
      <input type="submit" hidden />
    </Container>
  )
}
