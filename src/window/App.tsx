import { Container, Stage as PixiStage, withFilters } from '@inlet/react-pixi'
import { ReactNode, useContext, useEffect, VFC } from 'react'
import { WindowSettingContext, WindowSettingProvider } from './GlobalSetting'
import { frames } from './screen/frames'
import { Screen } from './screen/Screen'
import type { WindowInfo } from './stores/WindowSystem'
import { CRTFilter, RGBSplitFilter } from 'pixi-filters'

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
    <Stage
      crt={{ lineContrast: 1 }}
      rgbsplit={{
        red: [-0.4, 0.2],
        blue: [0.68, 0.2],
        green: [-0.06, 0.2]
      }}
      width={width}
      height={height}
    >
      <Filters>
        <Screen />
        {/* <Footer /> */}
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
