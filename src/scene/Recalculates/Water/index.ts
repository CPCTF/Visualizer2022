import { Time } from '#/system/Time'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { FrontSide, RepeatWrapping, ShaderMaterial, TextureLoader } from 'three'
import { IWaterOptions, Water } from './Water'
import WaterNormalTextureSrc from './Water_1_M_Normal.jpg?url'

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
      distortionScale: 20.0,
      fog: undefined,
      sunDirection: undefined,
      sunColor: undefined,
      clipBias: undefined,
      time: undefined,
      eye: undefined,
      side: FrontSide
    }
    this.water = new Water(options)
    this.water.rotation.x = -Math.PI / 2
    this.add(this.water)
  }
  public start(): void {
    super.start()
  }
  public update(): void {
    super.update()
    ;(this.water.material as ShaderMaterial).uniforms.time.value = Time.time
  }
}
