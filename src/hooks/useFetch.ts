import { useEffect, useState } from 'react'

interface PostModel {
  id: number
  title: string
  body: string
  userId: number
}

interface ParamsModel {
  params: {
    _limit: number
  }
}

export const useFetch = (link: string) => {
  const [data, setData] = useState<PostModel[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const updateData = async (props?: ParamsModel) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `${link}${
          props?.params?._limit ? `?_limit=${props?.params._limit}` : ''
        }`
      )
      const result = await response.json()
      setData(result)
      setError('')
    } catch (error: any) {
      console.error(error)
      setError('Не удалось получить данные')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    updateData()
  }, [])

  const refetch = (params: ParamsModel) => updateData(params)

  return { data, isLoading, error, refetch }
}
