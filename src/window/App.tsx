import { Container, Stage as PixiStage, withFilters } from '@inlet/react-pixi'
import { ReactNode, useContext, useEffect, VFC } from 'react'
import { WindowSettingContext, WindowSettingProvider } from './GlobalSetting'
import { frames } from './screen/frames'
import { Screen } from './screen/Screen'
import type { WindowInfo } from './stores/WindowSystem'
import { CRTFilter, RGBSplitFilter } from 'pixi-filters'
import { Footer } from './footer/Footer'

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
  return (
    <ContextBridge
      Context={WindowSettingContext}
      render={children => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  )
}

const Filters = withFilters(Container, {
  rgbsplit: RGBSplitFilter,
  crt: CRTFilter
})

export const AppInner = () => {
  const {
    width,
    height,
    windowSettings: { update }
  } = useContext(WindowSettingContext)
  useEffect(() => {
    update('visualizer', frames['visualizer'] as WindowInfo)
    update('clock', frames['clock'] as WindowInfo)
  }, [])
  return (
    <Stage width={width} height={height}>
      <Filters
        crt={{ vignetting: 0.2, noiseSize: 5 }}
        rgbsplit={{
          red: [-2.4, 2.2],
          blue: [2.68, 3.2],
          green: [-0.26, 2.2]
        }}
      >
        <Footer />
        <Screen />
      </Filters>
    </Stage>
  )
}

export const App = () => {
  return (
    <WindowSettingProvider>
      <AppInner />
    </WindowSettingProvider>
  )
}
