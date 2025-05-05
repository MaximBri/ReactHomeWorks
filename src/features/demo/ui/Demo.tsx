import { useViewportSize } from "@/hooks/useViewportSize"

export const Demo = () => {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
