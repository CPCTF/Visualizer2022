import { Scene, WebGLRenderer } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { Time } from './system/Time'
import { VisualizerGroup } from './templates/VisualizerGroup'
import { VisualizerObject } from './templates/VisualizerObject'
import { WebSocketInstance } from './system/WebSocketReceiver'
import { ServerRequest } from './system/ServerRequest'
import { Effects } from './scene/Effects'
import { UserMonolithGroup } from './scene/UserMonolihGroup'
import { MainCircuit } from './scene/MainCircuit'
import { VisualizerCamera } from './camera/VisualizerCamera'

export const RunVisualizer = async () => {
  // setup variables
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  })
  const composer = new EffectComposer(renderer)
  const camera = new VisualizerCamera()

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  const scene = new Scene()
  scene.add(new Effects(), new UserMonolithGroup(), new MainCircuit())

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
  WebSocketInstance.addEventListener('recalcurate', async () => {
    console.log('recalcurate')
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

    renderer.render(scene, camera)

    camera.update()

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
