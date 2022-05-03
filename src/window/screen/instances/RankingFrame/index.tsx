import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import { FrameBackground } from '#/window/utils/MonoColorBG'

const twoPadding = (time: number) => {
  return ('00' + time).slice(-2)
}

const getBaseText = (isUpdated: boolean) => {
  const now = new Date()
  return `C:¥CPCTF¥Visualizer¥apps> .¥ranking
Welcome to Visualizer, USERNAME !

${
  isUpdated
    ? `Ranking (Last Updated ${now.getHours()}:${twoPadding(
        now.getMinutes()
      )}):`
    : 'Fetching...'
}`
}

const rankingPost = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '8th',
  '9th',
  '10th',
  '11th',
  '12th',
  '13th',
  '14th',
  '15th',
  '16th',
  '17th',
  '18th',
  '19th',
  '20th'
]

export const RankingFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    const recalculateStartHandler = () => {
      setUpdating(true)
    }
    const recalculateEndHandler = () => {
      setUpdating(false)
    }

    EventEmitter.on('recalculatestart', recalculateStartHandler)
    EventEmitter.on('recalculateend', recalculateEndHandler)

    return () => {
      EventEmitter.off('recalculatestart', recalculateStartHandler)
      EventEmitter.off('recalculateend', recalculateEndHandler)
    }
  }, [])

  const mask = useMemo(
    () => new Graphics().drawRect(x, y, width, height),
    [x, y, width, height]
  )

  const updated = !updating && Visualizer.getInstance().isInitialized
  return (
    <Container mask={mask}>
      <FrameBackground width={width} height={height} bgColor={0x000000} />
      <Text
        text={getBaseText(updated)}
        anchor={0.0}
        position={[0, 0]}
        style={
          new TextStyle({
            align: 'left',
            fontFamily: 'DotGothic16, Roboto, Helvetica, sans-serif',
            fontSize: 30,
            fill: '#ffffff'
          })
        }
      />
      {updated
        ? UserManager.ranking.slice(0, 20).map((user, index) => {
            const textColor =
              index == 0 ? 'red' : index == 1 || index == 2 ? 'yellow' : 'white'
            return (
              <Text
                key={user.id}
                text={`${rankingPost[index]} : ${
                  user.displayName
                } / ${Math.floor(user.score)}pts`}
                anchor={0}
                position={[0, 124 + index * 26]}
                style={
                  new TextStyle({
                    align: 'left',
                    fontFamily: 'DotGothic16, Roboto, Helvetica, sans-serif',
                    fontSize: 30,
                    fill: textColor
                  })
                }
              />
            )
          })
        : null}
    </Container>
  )
}
