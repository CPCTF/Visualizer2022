import { Container } from '@inlet/react-pixi'
import { useContext } from 'react'
import { WindowSettingContext } from '../GlobalSetting'
import { FrameBackground } from '../utils/FrameBackground'

export const Startup = () => {
  const { width, height } = useContext(WindowSettingContext)
  return (
    <Container>
      <FrameBackground bgColor={0x000000} width={width} height={height} />
    </Container>
  )
}
