import { Filter } from 'pixi.js'
import fragmentSrc from './CRTFragment.frag?raw'

export class CRTFilter extends Filter {
  constructor(width: number, height: number) {
    super(undefined, fragmentSrc, {
      uResolution: { x: width, y: height }
    })
  }

  set width(value: number) {
    this.uniforms.uResolution.x = value
  }

  set height(value: number) {
    this.uniforms.uResolution.y = value
  }
}
