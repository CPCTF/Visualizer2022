import { Color, Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { Time } from './system/Time'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import {
  emitInitializedEvent,
  EventEmitter,
  initializeEventEmitter
} from './system/EventEmitter'
import { Effects } from './scene/Effects'
import { UserDisplayGroup } from './scene/UserDisplayGroup'
import { VisualizerCamera } from './camera/VisualizerCamera'
import { Recalculate } from './scene/Recalculates'
import { getInitialData } from './utils/getInitialData'
import { Circuit } from './scene/Circuit'
import { StartupPass } from './postprocess/StartupPass'
import { WaterAnimation } from './scene/Recalculates/Water'

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
  private composer: EffectComposer | null = null
  private _tick: (() => void) | null = null
  public get tick() {
    return this._tick
  }

  // flags
  private isLoaded = false
  // start start called
  private isStartCalled = false
  private isFirstTickCalled = false
  public get isInitialized() {
    return this.isLoaded
  }

  public resize(width: number, height: number) {
    if (!this.renderer || !this.camera || !this.composer) return
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.composer.setSize(width, height)
  }

  public setup(canvas: HTMLCanvasElement) {
    const renderer = new WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setClearColor(new Color(0x110011))
    const composer = new EffectComposer(renderer)
    this.composer = composer
    const camera = new VisualizerCamera()

    const scene = new Scene()
    scene.add(
      new Effects(),
      new UserDisplayGroup(),
      new Recalculate(),
      new Circuit(),
      new WaterAnimation()
    )

    // load resources
    // ThreeResourceLoader.addGLTF('gltf-path')
    // ThreeResourceLoader.addTexture('texture-path')
    // await ThreeResourceLoader.load(({ total, count }) => {
    //   console.log('progress' + count / total)
    // })
    // console.log('loaded')

    // server connection
    initializeEventEmitter()
    EventEmitter.on('start', () => {
      console.log('start ctf')
    })
    EventEmitter.on('end', () => {
      console.log('end ctf')
    })
    EventEmitter.on('recalculatestart', async () => {
      console.log('recalculatestart')
    })
    EventEmitter.on('recalculateend', async () => {
      console.log('recalculateend')
    })
    // EventEmitter.on('submit', data => {
    //   console.log('submit', data)
    // })

    // const initialData = await ServerRequest.initial()

    // set render path
    composer.addPass(new RenderPass(scene, camera))
    const startupPass = new StartupPass(
      scene,
      camera,
      canvas.width,
      canvas.height
    )
    composer.addPass(startupPass)

    // animation loop
    this._tick = () => {
      if (!this.isLoaded || !this.isStartCalled) return
      if (!this.isFirstTickCalled) {
        Time.start(performance.now())
        this.camera?.start()
        this.isFirstTickCalled = true
      }
      Time.update(performance.now())
      camera.update()
      scene.children.map(value => {
        if (
          value instanceof VisualizerGroup ||
          value instanceof VisualizerObject
        ) {
          value.update()
        }
      })

      // renderer.render(scene, camera)
      composer.render()
    }

    this.renderer = renderer
    this.camera = camera

    getInitialData().then(() => {
      this.isLoaded = true
      emitInitializedEvent()
    })
  }

  public start() {
    this.isStartCalled = true
  }
}
