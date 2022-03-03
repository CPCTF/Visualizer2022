import { footerHeight } from "#/window/globals";
import { WindowSettingContext } from "#/window/GlobalSetting";
import { Sprite } from "@inlet/react-pixi";
import { useContext } from "react";
import bgImgSrc from './xp.jpg'

export const Background = () => {
  const {width, height} = useContext(WindowSettingContext)
  console.log(width, height)
  return (
    <Sprite
      image={bgImgSrc}
      anchor={0}
      x={0}
      y={0}
      width={width}
      height={height - footerHeight}
    />
  )
}
