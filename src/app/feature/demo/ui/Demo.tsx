import { useToggle } from '@/app/hooks/useToggle'

export const Demo = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

  return (
    <>
      <h2>\Кликать сюда/</h2>
      <button onClick={() => toggle()}>{value}</button>
      <div style={{ height: '30px' }}></div>
      <button onClick={() => toggle(`${Date.now().valueOf()}`)}>{value}</button>
    </>
  )
}
