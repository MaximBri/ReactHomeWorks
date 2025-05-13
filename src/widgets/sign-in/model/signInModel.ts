import { useRef, useState, type FormEvent } from 'react'

interface SigninInputsModel {
  login: string
  password: string
}

interface ErrorModel {
  field: keyof SigninInputsModel | ''
  message: string
}

const defaultError: ErrorModel = {
  field: '',
  message: '',
}

const defaultInputsData = {
  login: '',
  password: '',
}

export const signInModel = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [error, setError] = useState<ErrorModel>(defaultError)
  const [inputsData, setInputsData] =
    useState<SigninInputsModel>(defaultInputsData)

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement
    setInputsData((prevValues) => {
      return { ...prevValues, [target.name]: target.value }
    })
  }

  const getError = (key: string): string => {
    if (error.field === key) return error.message
    return ''
  }

  const handleReset = () => {
    setInputsData(defaultInputsData)
  }

  const checkFields = (): boolean => {
    if (!inputsData.login) {
      setError({
        field: 'login',
        message: 'Логин не может быть пустым!',
      })
    } else if (!inputsData.password) {
      setError({
        field: 'password',
        message: 'Пароль не может быть пустым',
      })
    } else {
      setError(defaultError)
      return true
    }
    return false
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (checkFields()) {
      // логика отправки данных
      formRef.current?.reset()
    }
  }
  
  return { formRef, handleChange, handleReset, handleSubmit, getError, inputsData }
}
