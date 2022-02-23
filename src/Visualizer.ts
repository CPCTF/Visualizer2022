import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { Time } from './system/Time'
import { UserManager } from './system/UserManager'
import { WebSocketReceiver } from './system/WebSocketReceiver'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import { ThreeResourceLoader } from './system/Loader'

export const RunVisualizer = async () => {
  // setup variables
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  })
  const composer = new EffectComposer(renderer)

  const scene = new Scene()

  const camera = new PerspectiveCamera()

  const loader = new ThreeResourceLoader()
  const users = new UserManager()

  const websocketReceiver = new WebSocketReceiver()

  const timer = new Time()

  // call methods
  composer.addPass(new RenderPass(scene, camera))

  websocketReceiver.addEventListener('start', () => {
    console.log('start ctf')
  })
  websocketReceiver.addEventListener('end', () => {
    console.log('end ctf')
  })
  websocketReceiver.addEventListener('recalcurate', () => {
    console.log('recalcurate')
  })
  websocketReceiver.addEventListener('submit', () => {
    console.log('submit')
  })

  // load resources
  loader.addGLTF('gltf-path')
  loader.addTexture('texture-path')
  await loader.load(({ total, count }) => {
    console.log('progress' + count / total)
  })
  console.log('loaded')

  // animation loop
  const tick = (timestamp: number) => {
    requestAnimationFrame(tick)
    timer.update(timestamp)

    composer.render()

    scene.children.map(value => {
      if (
        value instanceof VisualizerGroup ||
        value instanceof VisualizerObject
      ) {
        value.update()
      }
    })
  }

  requestAnimationFrame(tick)
}
