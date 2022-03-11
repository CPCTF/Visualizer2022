import {
  CLEAR_MODES,
  Filter,
  FilterSystem,
  Point,
  Rectangle,
  RenderTexture
} from 'pixi.js'
import fragmentSrc from './BleedingFragment.frag?raw'

type Size = number | number[] | Point

export class BleedingFilter extends Filter {
  constructor() {
    super(undefined, fragmentSrc, { size: 10 })
  }

  get size(): Size {
    return this.uniforms.size
  }
  set size(value: Size) {
    if (typeof value === 'number') {
      value = [value, value]
    }
    this.uniforms.size = value
  }
}
