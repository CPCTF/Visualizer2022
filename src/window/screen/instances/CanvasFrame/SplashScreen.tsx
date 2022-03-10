import { Container } from '@inlet/react-pixi'
import { useEffect, VFC } from 'react'

export const SplashScreen: VFC<{
  width: number
  height: number
  onComplete: () => void
}> = ({ width, height, onComplete }) => {
  useEffect(() => {
    setTimeout(() => {
      onComplete()
    }, 3000)
  }, [])
  return <Container position={[width / 2, height / 2]}></Container>
}
