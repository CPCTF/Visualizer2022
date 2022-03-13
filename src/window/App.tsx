import { Container, Stage as PixiStage, withFilters } from '@inlet/react-pixi'
import { ReactNode, useContext, VFC } from 'react'
import { WindowSettingContext, WindowSettingProvider } from './GlobalSetting'
import { Screen } from './screen/Screen'
import { Footer } from './footer/Footer'
// import { CRTFilter } from './postprocessing/CRTFilter'
import { LensDistortionFilter } from './postprocessing/LensDistortionFilter'
import { VisnettingFilter } from './postprocessing/VisnettingFilter'
import { PixelateFilter, RGBSplitFilter, CRTFilter } from 'pixi-filters'
import { BleedingFilter } from './postprocessing/BleedingFilter'
import { LineFilter } from './postprocessing/LineFilter'

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
  // crt: CRTFilter,
  line: LineFilter,
  lensDistortion: LensDistortionFilter,
  // pixel: PixelateFilter,
  // bleeding: BleedingFilter,
  // colorshift: RGBSplitFilter,
  visnetting: VisnettingFilter,
})

export const AppInner = () => {
  const { width, height } = useContext(WindowSettingContext)
  return (
    <Stage width={width} height={height}>
      <Filters
        line={{ lineWidth: [2, 2], blend: 0.5 }}
        pixel={{ size: 1.5 }}
        bleeding={{ size: 1.5 }}
        colorshift={{ red: [-2.0, 0.0], green: [0.0, 0.0], blue: [2.0, 0.0] }}
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
