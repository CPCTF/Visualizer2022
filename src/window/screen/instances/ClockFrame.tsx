import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text, useTick } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { globalSettings } from '#/system/GlobalSettings'

const twoPadding = (time: number) => {
  return ('00' + time).slice(-2)
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
    // console.log(delta.getMilliseconds())
    setRestTime(
      `残り: ${Math.floor(delta / 60)}時間${twoPadding(delta % 60)}分`
    )
  })

  return (
    <Container
      mask={useMemo(
        () => new Graphics().drawRect(x, y, width, height),
        [x, y, width, height]
      )}
    >
      <Text
        text={time}
        anchor={0.5}
        position={[width / 2, height / 2]}
        style={
          new TextStyle({
            align: 'right',
            fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
            fontSize: 50,
            fill: '#000000'
          })
        }
      />
      <Text
        text={restTime}
        anchor={0.5}
        position={[width / 2, height / 2 - 50]}
        style={
          new TextStyle({
            align: 'right',
            fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
            fontSize: 30,
            fill: '#000000'
          })
        }
      />
    </Container>
  )
}
