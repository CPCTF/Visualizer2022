import { EventEmitter } from '#/system/EventEmitter'
import { Time } from '#/system/Time'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import {
  DoubleSide,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader
} from 'three'
import { Pass } from 'three/examples/jsm/postprocessing/Pass'
import { IWaterOptions, Water } from './Water'
import WaterNormalTextureSrc from './Water_1_M_Normal.jpg?url'
import gsap from 'gsap'

export class WaterAnimation extends VisualizerGroup {
  private water: Water
  constructor() {
    super()
    const options: IWaterOptions = {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new TextureLoader().load(
        WaterNormalTextureSrc,
        function (texture) {
          texture.wrapS = texture.wrapT = RepeatWrapping
        }
      ),
      alpha: 1.0,
      waterColor: 0x3e89ce,
      distortionScale: 2.7,
      fog: false,
      sunDirection: undefined,
      sunColor: undefined,
      clipBias: undefined,
      time: undefined,
      eye: undefined,
      side: undefined
    }
    this.water = new Water(options)
    this.water.rotation.x = -Math.PI / 2
    this.add(this.water)
  }
  public start(): void {
    this.position.setY(-1)
    this.visible = false
    EventEmitter.on('recalculatestart', () => {
      this.visible = true
      gsap.to(this.position, 4, { y: 2 })
    })
    EventEmitter.on('recalculateend', () => {
      gsap.to(this.position, 4, { y: -1 })
    })
  }
  public update(): void {
    super.update()
    ;(this.water.material as ShaderMaterial).uniforms.time.value = Time.time
  }
}
