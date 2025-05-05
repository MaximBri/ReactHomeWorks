import { useEffect, useRef, useState, type RefObject } from 'react'

export const useHover = <T extends HTMLElement = HTMLElement>(): {
  hovered: boolean
  ref: RefObject<T | null>
} => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return { hovered, ref }
}
