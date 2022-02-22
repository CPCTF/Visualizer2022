import { Camera, Object3D, Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'

export class Visualizer {
  private renderer: WebGLRenderer
  private composer: EffectComposer
  private scene: Scene
  private camera: Camera
  constructor(camera: Camera) {
    this.renderer = new WebGLRenderer({
      canvas: document.getElementById('main-canvas') as HTMLCanvasElement,
      alpha: true,
      antialias: true
    })
    this.composer = new EffectComposer(this.renderer)
    this.scene = new Scene()
    this.camera = camera

    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.tick()
  }

  public add(...args: Object3D[]) {
    this.scene.add(...args)
  }

  private tick() {
    requestAnimationFrame(this.tick.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}
