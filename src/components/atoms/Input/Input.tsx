import { useId } from 'react'
import styled from 'styled-components'
import { UseFormRegister } from 'react-hook-form'

import { INPUT_COLOR, PRIMARY_COLOR } from '@/components/_settings'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'regular';
  gap: 10px;
  color: ${INPUT_COLOR.text};
  text-transform: capitalize;
  font-size: 0.9rem;
  position: relative;
`

const Container = styled.input`
  font-family: 'medium';
  font-size: 0.9rem;
  height: 40px;
  border: 2px solid ${INPUT_COLOR.defaultBorder};
  border-radius: 8px;
  outline: none;
  padding: 0 12px;
  transition: border 0.3s ease;
  color: ${INPUT_COLOR.text};

  &:focus {
    border: 2px solid ${INPUT_COLOR.activeBorder};
  }

  &::placeholder {
    font-family: 'medium';
    color: ${INPUT_COLOR.placeholder};
  }
`

const ErrorMessage = styled.span`
  font-family: 'medium';
  font-size: 0.8rem;
  color: ${PRIMARY_COLOR.red};
  position: absolute;
  right: 0;
  top: 0;
`

type FormValues = {
  name: string
  email: string
  phone: string
}

type InputProps = {
  label: string
  placeholder: string
  register: UseFormRegister<FormValues>
  name: 'name' | 'email' | 'phone'
  validationSchema?: any
  errors: any
}

export const Input = (props: InputProps) => {
  const inputId = useId()

  return (
    <Label htmlFor={inputId}>
      {props.label}

      <Container id={inputId} placeholder={props.placeholder} {...props.register(props.name, props.validationSchema)} />
      {props.errors[props.name] && <ErrorMessage>{props.errors[props.name].message}</ErrorMessage>}
    </Label>
  )
}
