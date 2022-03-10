import { ThreeResourceLoader } from '#/system/Loader'
import { Time } from '#/system/Time'
import { VisualizerObject } from '#/templates/VisualizerObject'
import { PlaneBufferGeometry, ShaderMaterial, Texture } from 'three'
import fragmentShader from './DisplayFragment.frag?raw'
import vertexShader from './DisplayVertex.vert?raw'
import faceSrc from './face.png'
import gsap from 'gsap'

export class Display extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(4 * 0.5, 3 * 0.5),
      new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          face: { value: ThreeResourceLoader.get(faceSrc) as Texture },
          mode: { value: 2 },
          progress: { value: 0 },
          time: { value: 0 }
        }
      })
    )
    this.position.set(0, 1.5, 1.1)
    this.rotation.set(-0.03 + Math.PI, -Math.PI, Math.PI)
  }

  public start() {
    const mode = (this.material as ShaderMaterial).uniforms.mode
    const progress = (this.material as ShaderMaterial).uniforms.progress
    if (!mode || !progress) return
    setTimeout(() => {
      setInterval(() => {
        mode.value = 1
        progress.value = 1
        gsap.to(progress, 0.3, { value: 0 })
        setTimeout(() => {
          mode.value = 0
          progress.value = 1
          gsap.to(progress, 0.3, { value: 0 })
        }, 2000)
        setTimeout(() => {
          mode.value = 2
          progress.value = 1
          gsap.to(progress, 0.3, { value: 0 })
        }, 4000)
      }, 10000)
    }, Math.random() * 10000)
  }

  public update() {
    super.update()
    const time = (this.material as ShaderMaterial).uniforms.time
    if (time) time.value = Time.time
  }
}
