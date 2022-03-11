import { Filter } from 'pixi.js'
import fragmentSrc from './LensDistortionFragment.frag?raw'

export class LensDistortionFilter extends Filter {
  constructor() {
    super(undefined, fragmentSrc, {})
  }
}
