import { Filter } from 'pixi.js'
import fragmentSrc from './VisnettingFragment.frag?raw'

export class VisnettingFilter extends Filter {
  constructor() {
    super(undefined, fragmentSrc, {})
  }
}
