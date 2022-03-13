import {
  Filter,
  type FilterSystem,
  type RenderTexture,
  type CLEAR_MODES,
  type Rectangle
} from 'pixi.js'
import fragmentSrc from './HexFragment.frag?raw'

export class HexFilter extends Filter {
  constructor() {
    super(undefined, fragmentSrc, {
      dimensions: [0, 0],
      devicePixelRatio: 0,
      lineWidth: [1, 0],
      blend: 0.5
    })
  }
  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clear: CLEAR_MODES
  ): void {
    const { width, height } = input.filterFrame as Rectangle

    this.uniforms.dimensions[0] = width
    this.uniforms.dimensions[1] = height
    this.uniforms.devicePixelRatio = window.devicePixelRatio
    filterManager.applyFilter(this, input, output, clear)
  }

  set lineWidth(value: number[]) {
    this.uniforms.lineWidth = value
  }

  set blend(value: number) {
    this.uniforms.blend = value
  }
}
