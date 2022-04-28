import {
  Container,
  Stage as PixiStage,
  useApp,
  withFilters
} from '@inlet/react-pixi'
import { ReactNode, useContext, useEffect, useState, VFC } from 'react'
import { WindowSettingContext, WindowSettingProvider } from './GlobalSetting'
import { Screen } from './screen/Screen'
import { Footer } from './footer/Footer'
// import { CRTFilter } from './postprocessing/CRTFilter'
import { LensDistortionFilter } from './postprocessing/LensDistortionFilter'
import { VisnettingFilter } from './postprocessing/VisnettingFilter'
import { RGBSplitFilter, AdvancedBloomFilter } from 'pixi-filters'
import { HexFilter } from './postprocessing/HexFilter'
import style from './main.module.css'
import { Startup } from './startup/Startup'
import { playSound } from './utils/sounds/sound'
import { Pointer } from '#/window/pointer/Pointer'
import { SpriteHolder } from './stores/SpriteHolder'

// the context bridge:
const ContextBridge: VFC<{
  children: ReactNode
  Context: typeof WindowSettingContext
  render: (children: ReactNode) => ReactNode
}> = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {value =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  )
}

export const Stage: VFC<{ children: ReactNode } & Record<string, unknown>> = ({
  children,
  ...props
}) => {
  const { width, height } = useContext(WindowSettingContext)
  return (
    <ContextBridge
      Context={WindowSettingContext}
      render={children => (
        <PixiStage width={width} height={height} {...props}>
          {children}
        </PixiStage>
      )}
    >
      {children}
    </ContextBridge>
  )
}

const Filters = withFilters(Container, {
  hex: HexFilter,
  bloom: AdvancedBloomFilter,
  colorshift: RGBSplitFilter,
  lensDistortion: LensDistortionFilter,
  visnetting: VisnettingFilter
})

export const AppInner = () => {
  const mousedownHandler = () => {
    playSound('mousedown')
  }
  const mouseupHandler = () => {
    playSound('mouseup')
  }

  const [loaded, setLoaded] = useState(false)

  const app = useApp()
  useEffect(() => {
    app.ticker.maxFPS = 30
    SpriteHolder.onLoad(() => {
      setLoaded(true)
    })
  }, [])

  if (!loaded) return <></>

  return (
    <Filters
      hex={{ lineWidth: [2, 2], blend: 0.5 }}
      bloom={{
        threshold: 0.1,
        bloomScale: 0.5,
        brightness: 1,
        blur: 1,
        quality: 4
      }}
      colorshift={{
        red: [-2.0, 0.0],
        green: [0.0, 0.0],
        blue: [2.0, 0.0]
      }}
    >
      <Container
        mousedown={mousedownHandler}
        mouseup={mouseupHandler}
        interactive
      >
        <Footer />
        <Screen />
        <Startup />
      </Container>
      <Pointer />
    </Filters>
  )
}

export const App = () => {
  useEffect(() => {
    document.body.style.cursor = 'none'
  }, [])
  return (
    <WindowSettingProvider>
      <main className={style.main}>
        <Stage id="pixicanvas">
          <AppInner />
        </Stage>
      </main>
    </WindowSettingProvider>
  )
}
