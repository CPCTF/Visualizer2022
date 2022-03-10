import { ThreeResourceLoader } from '#/system/Loader'
import { VisualizerObject } from '#/templates/VisualizerObject'
import { PlaneBufferGeometry, ShaderMaterial, Texture } from 'three'
import fragmentShader from './DisplayFragment.frag?raw'
import faceSrc from './face.png'

export class Display extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(4 * 0.5, 3 * 0.5),
      new ShaderMaterial({
        fragmentShader,
        uniforms: {
          face: { value: ThreeResourceLoader.get(faceSrc) as Texture }
        }
      })
    )
    this.position.set(0, 1.5, 1.1)
    this.rotation.set(-0.03, 0, -Math.PI)
  }
}
