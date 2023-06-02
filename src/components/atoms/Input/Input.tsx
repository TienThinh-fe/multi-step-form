import styled from 'styled-components'
import { INPUT_COLOR } from '@/components/_settings'
import { useId } from 'react'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'regular';
  gap: 10px;
  color: ${INPUT_COLOR.text};
  text-transform: capitalize;
  font-size: 0.9rem;
`

const Container = styled.input`
  font-family: 'bold';
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

type InputProps = {
  label: string
  placeholder: string
  key: string
  value: string
  setValue: (key: string, text: string) => void
}

export const Input = (props: InputProps) => {
  const inputId = useId()

  return (
    <Label htmlFor={inputId}>
      {props.label}

      <Container
        id={inputId}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(props.key, e.target.value)}
      />
    </Label>
  )
}
