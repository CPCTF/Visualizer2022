import { Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { Time } from './system/Time'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import { EventManagerInstance } from './system/EventManager'
import { Effects } from './scene/Effects'
import { UserDisplayGroup } from './scene/UserDisplayGroup'
import { MainCircuit } from './scene/MainCircuit'
import { VisualizerCamera } from './camera/VisualizerCamera'
import { Recalculate } from './scene/Recalculates'
import { getInitialData } from './utils/getInitialData'
import { Circuit } from './scene/Circuit/CliantScript/Circuit'

export class Visualizer {
  // singleton
  private static instance: Visualizer | null
  public static getInstance() {
    if (this.instance) return this.instance
    this.instance = new Visualizer()
    return this.instance
  }

  private renderer: WebGLRenderer | null = null
  private camera: VisualizerCamera | null = null
  private tick: ((timestamp: number) => void) | null = null

  // flags
  private _isInitialized = false
  // start called but not setupped
  private isStartCalled = false
  public get isInitialized() {
    return this._isInitialized
  }

  public resize(width: number, height: number) {
    if (!this.renderer || !this.camera) return
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  public setup(canvas: HTMLCanvasElement) {
    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    })
    const composer = new EffectComposer(renderer)
    const camera = new VisualizerCamera()

    const scene = new Scene()
    scene.add(
      new Effects(),
      new UserDisplayGroup(),
      new Recalculate(),
      new Circuit()
    )

    // load resources
    // ThreeResourceLoader.addGLTF('gltf-path')
    // ThreeResourceLoader.addTexture('texture-path')
    // await ThreeResourceLoader.load(({ total, count }) => {
    //   console.log('progress' + count / total)
    // })
    // console.log('loaded')

    // server connection
    EventManagerInstance.addEventListener('start', () => {
      console.log('start ctf')
    })
    EventManagerInstance.addEventListener('end', () => {
      console.log('end ctf')
    })
    EventManagerInstance.addEventListener('recalculatestart', async () => {
      console.log('recalculatestart')
    })
    EventManagerInstance.addEventListener('recalculateend', async () => {
      console.log('recalculateend')
    })
    EventManagerInstance.addEventListener('submit', () => {
      // console.log('submit', (e as CustomEvent).detail)
    })

    // const initialData = await ServerRequest.initial()

    // set render path
    composer.addPass(new RenderPass(scene, camera))

    // animation loop
    this.tick = (timestamp: number) => {
      if (this.tick) requestAnimationFrame(this.tick)
      Time.update(timestamp)

      camera.update()
      scene.children.map(value => {
        if (
          value instanceof VisualizerGroup ||
          value instanceof VisualizerObject
        ) {
          value.update()
        }
      })

      renderer.render(scene, camera)
    }

    this.renderer = renderer
    this.camera = camera

    getInitialData().then(() => {
      this._isInitialized = true
      EventManagerInstance.initialized()
      if (this.isStartCalled) this.start()
    })
  }

  public start() {
    if (this._isInitialized && this.tick) {
      Time.start(performance.now())
      this.camera?.start()
      requestAnimationFrame(this.tick)
      EventManagerInstance.visualizerStart()
    } else {
      this.isStartCalled = true
    }
  }
}
