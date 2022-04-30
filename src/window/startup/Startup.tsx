import { Container, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useContext, useState } from 'react'
import { setVolume, windowHeaderHeight } from '../globals'
import { WindowSettingContext } from '../GlobalSetting'
import { FrameBackground } from '../utils/MonoColorBG'
import {
  FrameTemplate,
  getFrameHeight,
  getFrameWidth
} from '../utils/FrameTemplate'
import { playLongSound, playSound } from '../utils/sounds/sound'
import { Button } from './Button'

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
        <FrameTemplate width={rect.width} height={rect.height} title="音の確認">
          <FrameBackground
            bgColor={0xc6c6c6}
            width={getFrameWidth(rect.width)}
            height={getFrameHeight(rect.height)}
          />
          <Text
            text="音を鳴らしても？"
            anchor={[0, 0]}
            position={[5, 5]}
            style={
              new TextStyle({
                align: 'center',
                fontFamily:
                  'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',
                fontSize: windowHeaderHeight * 0.5,
                fill: '#000'
              })
            }
          />
          <Button
            text="いいね"
            anchor={[1, 0.5]}
            position={[
              getFrameHeight(rect.width) - 215,
              getFrameHeight(rect.height) - 30
            ]}
            click={() => {
              setVolume(1)
              setVisible(false)
              playSound('mousedown')
              playSound('mouseup')
              playLongSound('hdd')
            }}
          />
          <Button
            text="よくないね"
            anchor={[1, 0.5]}
            position={[
              getFrameHeight(rect.width) - 60,
              getFrameHeight(rect.height) - 30
            ]}
            click={() => {
              setVolume(0)
              setVisible(false)
            }}
          />
        </FrameTemplate>
      </Container>
    </Container>
  ) : null
}
