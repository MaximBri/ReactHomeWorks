import { useState } from 'react'

type LocalStorageSetValue = string
type LocalStorageReturnValue = LocalStorageSetValue | null

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void
    removeItem: () => void
  }
]

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(localStorage.getItem(key) ?? '')

  const setNewValue = (text: string) => {
    localStorage.setItem(key, text)
    setValue(text)
  }

  const removeItem = () => {
    setNewValue('')
  }

  return [value, { setItem: setNewValue, removeItem }]
}
