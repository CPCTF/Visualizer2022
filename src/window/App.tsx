import { Container, Stage as PixiStage, withFilters } from '@inlet/react-pixi'
import { ReactNode, useContext, VFC } from 'react'
import { WindowSettingContext, WindowSettingProvider } from './GlobalSetting'
import { Screen } from './screen/Screen'

// the context bridge:
const ContextBridge: VFC<{children: ReactNode, Context: typeof WindowSettingContext, render: (children: ReactNode) => ReactNode}> = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {value => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  )
}

export const Stage: VFC<{children: ReactNode} & Record<string, any>> = ({ children, ...props }) => {
  return (
    <ContextBridge Context={WindowSettingContext} render={children  => <PixiStage {...props}>{children}</PixiStage>}>
      {children}
    </ContextBridge>
  )
}

const Filters = withFilters(Container, {})

export const AppInner = () => {
  const { width, height }= useContext(WindowSettingContext)
  return (
    <Stage width={width} height={height}>
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