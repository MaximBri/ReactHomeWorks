import { useWindowScroll } from '@/hooks/useWindowScroll'
import { useEffect } from 'react'

export const Demo = () => {
  const [scroll, scrollTo] = useWindowScroll()

  useEffect(() => {
    console.log('Scroll position:', scroll)
  }, [scroll])

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      <div style={{height: '1000px'}}></div>
    </div>
  )
}
