import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useMemo, useState, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text, useTick } from '@inlet/react-pixi'
import { Visualizer } from '#/Visualizer'
import { globalSettings } from '#/system/GlobalSettings'
import { EventEmitter } from '#/system/EventEmitter'
import { UserManager } from '#/system/UserManager'
import type { User } from '#/system/User'

const twoPadding = (time: number) => {
  return ('00' + time).slice(-2)
}

export const RankingFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  const [ranking, setRanking] = useState<User[]>(() => {
    return UserManager.ranking.map(value => {
      return UserManager.getUser(value) as User
    })
  })
  console.log(ranking)
  const [updating, setUpdating] = useState(true)
  useEffect(() => {
    const recalculateStartHandler = () => {
      setUpdating(true)
    }
    const recalculateEndHandler = () => {
      setUpdating(false)
      setRanking(
        UserManager.ranking.map(value => {
          return UserManager.getUser(value) as User
        })
      )
      console.log(ranking)
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

  if (updating) {
    ;<Container mask={mask}>
      <Text
        text={'更新中'}
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
  }

  return (
    <Container mask={mask}>
      {ranking.map((user, index) => {
        return (
          <Text
            key={user.id}
            text={`${index + 1} : ${user.displayName}`}
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
