import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import type { User } from '#/system/User'
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

export const RankingFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  const [ranking, setRanking] = useState<User[]>(() => UserManager.ranking)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    const recalculateStartHandler = () => {
      setUpdating(true)
    }
    const recalculateEndHandler = () => {
      setUpdating(false)
      setRanking(UserManager.ranking)
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
            fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
            fontSize: 30,
            fill: '#ffffff'
          })
        }
      />
      {updated
        ? ranking.slice(0, 10).map((user, index) => {
            const textColor =
              index == 0 ? 'red' : index == 1 || index == 2 ? 'yellow' : 'white'
            return (
              <Text
                key={user.id}
                text={`${index + 1} : ${user.displayName} / ${Math.floor(
                  user.score
                )}pts`}
                anchor={0}
                position={[0, 124 + index * 26]}
                style={
                  new TextStyle({
                    align: 'left',
                    fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
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
