import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import type { User } from '#/system/User'

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

  if (updating || !Visualizer.getInstance().isInitialized) {
    return (
      <Container mask={mask}>
        <Text
          text={'更新待ち'}
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
      </Container>
    )
  }

  return (
    <Container mask={mask}>
      {ranking.map((user, index) => {
        return (
          <Text
            key={user.id}
            text={`${index + 1} : ${user.displayName} / ${Math.floor(
              user.score
            )}pts`}
            anchor={0.5}
            position={[width / 2, 30 + index * 30]}
            style={
              new TextStyle({
                align: 'right',
                fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
                fontSize: 30,
                fill: '#000000'
              })
            }
          />
        )
      })}
    </Container>
  )
}
