import { Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { Time } from './system/Time'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import { WebSocketInstance } from './system/WebSocketReceiver'
import { Effects } from './scene/Effects'
import { UserDisplayGroup } from './scene/UserDisplayGroup'
import { MainCircuit } from './scene/MainCircuit'
import { VisualizerCamera } from './camera/VisualizerCamera'
import { Recalculate } from './scene/Recalculates'
import { getInitialData } from './utils/getInitialData'

export interface SetupVisualizerReturn {
  resizeHandler: (width: number, height: number) => void
  startVisualizer: () => void
}
export const SetupVisualizer = (
  canvas: HTMLCanvasElement
): SetupVisualizerReturn => {
  // setup variables
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  })
  const composer = new EffectComposer(renderer)
  const camera = new VisualizerCamera()

  // resize event
  const resizeHandler = (width: number, height: number) => {
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  const scene = new Scene()
  scene.add(
    new Effects(),
    new UserDisplayGroup(),
    new MainCircuit(),
    new Recalculate()
  )

  // load resources
  // ThreeResourceLoader.addGLTF('gltf-path')
  // ThreeResourceLoader.addTexture('texture-path')
  // await ThreeResourceLoader.load(({ total, count }) => {
  //   console.log('progress' + count / total)
  // })
  // console.log('loaded')

  // server connection
  WebSocketInstance.addEventListener('start', () => {
    console.log('start ctf')
  })
  WebSocketInstance.addEventListener('end', () => {
    console.log('end ctf')
  })
  WebSocketInstance.addEventListener('recalculate', async () => {
    console.log('recalculate')
    // const { ranking, circuit } = await ServerRequest.recalculate()
  })
  WebSocketInstance.addEventListener('submit', () => {
    console.log('submit')
  })

  // const initialData = await ServerRequest.initial()

  // set render path
  composer.addPass(new RenderPass(scene, camera))

  // animation loop
  const tick = (timestamp: number) => {
    requestAnimationFrame(tick)
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

  getInitialData()

  return {
    resizeHandler,
    startVisualizer: () => {
      Time.start(performance.now())
      camera.start()
      requestAnimationFrame(tick)
    }
  }
}
