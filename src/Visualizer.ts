import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ThreeResourceLoader } from './system/Loader'
import { Time } from './system/Time'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import { WebSocketInstance } from './system/WebSocketReceiver'

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

  // call methods
  composer.addPass(new RenderPass(scene, camera))

  WebSocketInstance.addEventListener('start', () => {
    console.log('start ctf')
  })
  WebSocketInstance.addEventListener('end', () => {
    console.log('end ctf')
  })
  WebSocketInstance.addEventListener('recalcurate', () => {
    console.log('recalcurate')
  })
  WebSocketInstance.addEventListener('submit', () => {
    console.log('submit')
  })

  // load resources
  ThreeResourceLoader.addGLTF('gltf-path')
  ThreeResourceLoader.addTexture('texture-path')
  await ThreeResourceLoader.load(({ total, count }) => {
    console.log('progress' + count / total)
  })
  console.log('loaded')

  // animation loop
  const tick = (timestamp: number) => {
    requestAnimationFrame(tick)
    Time.update(timestamp)

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
  Time.start(performance.now())
  requestAnimationFrame(tick)
}
