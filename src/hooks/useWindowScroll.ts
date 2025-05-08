import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

interface Point {
  x: number
  y: number
}

interface OptionalPoint extends Partial<Point> {}

export const useWindowScroll = (): [
  Point,
  ({ x, y }: OptionalPoint) => void
] => {
  const [scroll, setScroll] = useState<Point>({ x: 0, y: 0 })

  const handleResize = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    })
  }

  const scrollTo = ({ x, y }: OptionalPoint) => {
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth',
    })
  }

  useWindowEvent('scroll', handleResize)

  return [scroll, scrollTo]
}
