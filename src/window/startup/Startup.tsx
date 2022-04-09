import { Container, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useContext, useState } from 'react'
import { setVolume, windowHeaderHeight } from '../globals'
import { WindowSettingContext } from '../GlobalSetting'
import { FrameBackground } from '../utils/MonoColorBG'
import { FrameTemplate, getFrameHeight } from '../utils/FrameTemplate'
import { playLongSound, playSound } from '../utils/sounds/sound'

export const Startup = () => {
  const { width, height } = useContext(WindowSettingContext)
  const [visible, setVisible] = useState(true)
  const rect = {
    width: 500,
    height: 180,
    left: width * 0.5 - 250,
    top: height * 0.5 - 90
  }
  return visible ? (
    <Container>
      <FrameBackground bgColor={0x000000} width={width} height={height} />
      <Container position={[rect.left, rect.top]}>
        <FrameTemplate
          width={rect.width}
          height={rect.height}
          title="音を確認する(しなさい)"
        >
          <Text
            text="音が鸣リまずよ"
            anchor={[0, 0]}
            position={[5, 5]}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                fontSize: windowHeaderHeight * 0.5,
                fill: '#000'
              })
            }
          />
          <Text
            text="いいね"
            anchor={[0, 1]}
            position={[
              getFrameHeight(rect.width) - 305,
              getFrameHeight(rect.height) - 5
            ]}
            interactive
            click={() => {
              setVolume(1)
              setVisible(false)
              playSound('mousedown')
              playSound('mouseup')
              playLongSound('hdd')
            }}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                fontSize: windowHeaderHeight * 0.5,
                fill: '#000'
              })
            }
          />
          <Text
            text="よくないね"
            anchor={[1, 1]}
            position={[
              getFrameHeight(rect.width) - 5,
              getFrameHeight(rect.height) - 5
            ]}
            interactive
            click={() => {
              setVolume(0)
              setVisible(false)
            }}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                fontSize: windowHeaderHeight * 0.5,
                fill: '#000'
              })
            }
          />
        </FrameTemplate>
      </Container>
    </Container>
  ) : null
}
