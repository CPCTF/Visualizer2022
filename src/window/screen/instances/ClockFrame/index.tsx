import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Sprite, Text, useTick } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { globalSettings } from '#/system/GlobalSettings'
import { UserManager } from '#/system/UserManager'

import backgroundSrc from './kusodasaBackGround.png'
import titleSrc from './kusodasaTitle.png'
import nazoCatSrc from './nazoCat.png'
import counterSrc from './counter.png'

const twoPadding = (time: number) => {
  return ('00' + time).slice(-2)
}
const fourPadding = (time: number) => {
  return ('0000' + time).slice(-4)
}

export const ClockFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  const [time, setTime] = useState('')
  const [restTime, setRestTime] = useState('')
  useTick(() => {
    const now = new Date()
    setTime(
      `${now.getHours()}:${twoPadding(now.getMinutes())}:${twoPadding(
        now.getSeconds()
      )}`
    )
    if (!Visualizer.getInstance().isInitialized) return
    // minutes
    const delta = Math.ceil(
      (globalSettings.endTime.getTime() - now.getTime()) / 1000 / 60
    )
    setRestTime(`${Math.floor(delta / 60)}時間${twoPadding(delta % 60)}分`)
  })

  const virtualWidth = Math.max(750, width)

  return (
    <Container
      mask={useMemo(
        () => new Graphics().drawRect(x, y, width, height),
        [x, y, width, height]
      )}
    >
      <Container scale={width / virtualWidth}>
        {/* 背景 */}
        <Sprite
          image={backgroundSrc}
          position={[0, 0]}
          width={virtualWidth}
          height={virtualWidth}
        />
        {/* タイトル（残り時間） */}
        {restTime ? (
          <Sprite
            image={titleSrc}
            anchor={[0.5, 0]}
            position={[virtualWidth / 2, 40]}
          />
        ) : null}
        {/* 時間 */}
        <Text
          text={restTime || time}
          anchor={[0.5, 0]}
          position={[virtualWidth / 2, 190]}
          style={
            new TextStyle({
              dropShadow: true,
              dropShadowAlpha: 0.6,
              dropShadowBlur: 8,
              dropShadowDistance: 16,
              fill: ['fuchsia', 'blue', 'lime', 'yellow', '#ff8000', 'red'],
              fillGradientType: 1,
              fontFamily: 'HGRPP1',
              fontSize: 128,
              letterSpacing: 3
            })
          }
        />
        {/* 謎猫 */}
        <Sprite
          image={nazoCatSrc}
          anchor={[0.5, 0]}
          position={[virtualWidth / 2, 400]}
        />
        {/* カウンター */}
        {restTime ? (
          <>
            <Sprite
              image={counterSrc}
              anchor={[0.5, 0]}
              position={[virtualWidth / 2, 550]}
            />
            <Text
              text={`${fourPadding(UserManager.size())}`}
              anchor={0.5}
              position={[virtualWidth / 2 - 60, 603]}
              style={
                new TextStyle({
                  align: 'right',
                  fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
                  fontSize: 24,
                  fill: 'yellow'
                })
              }
            />
          </>
        ) : null}
      </Container>
    </Container>
  )
}
