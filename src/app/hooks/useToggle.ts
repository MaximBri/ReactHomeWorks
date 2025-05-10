import { useEffect, useReducer, useState } from 'react'

type ToggleAction =
  | { type: 'init'; values: any[] }
  | { type: 'toggle' }
  | { type: 'add'; element: any }

interface ToggleState {
  list: any[]
  index: number
}

const reducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case 'init':
      return { list: action.values, index: 0 }
    case 'toggle': {
      const nextIndex =
        state.index === state.list.length - 1 ? 0 : state.index + 1
      return { ...state, index: nextIndex }
    }
    case 'add': {
      const newList = [...state.list, action.element]
      const newIndex =
        state.index === state.list.length - 1
          ? newList.length - 1
          : state.index + 1
      return { list: newList, index: newIndex }
    }
    default:
      return state
  }
}

export const useToggle = (values: any[]) => {
  const [state, dispatch] = useReducer(reducer, { list: values, index: 0 })

  const toggle = (element?: any) => {
    if (element) {
      dispatch({ type: 'add', element })
    } else {
      dispatch({ type: 'toggle' })
    }
  }

  return [state.list[state.index], toggle]
}
