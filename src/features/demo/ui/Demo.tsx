import { useHover } from '@/hooks/useHover'

export const Demo = () => {
  const { hovered, ref } = useHover<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ backgroundColor: hovered ? 'lightblue' : 'white', padding: 20 }}
    >
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  )
}
