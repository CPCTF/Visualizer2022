import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text, useTick } from '@inlet/react-pixi'

export const ClockFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  const [time, setTime] = useState('')
  useTick(() => {
    const now = new Date()
    setTime(
      `${now.getHours()}:${('00' + now.getMinutes()).slice(-2)}:${(
        '00' + now.getSeconds()
      ).slice(-2)}`
    )
  })

  return (
    <Container mask={new Graphics().drawRect(x, y, width, height)}>
      <Text
        text={time}
        anchor={0.5}
        position={[width / 2, height / 2]}
        style={
          new TextStyle({
            align: 'right',
            fontFamily: 'Roboto, Helvetica, sans-serif',
            fontSize: 50,
            fill: '#000000'
          })
        }
      />
    </Container>
  )
}
