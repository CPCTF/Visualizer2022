import { Time } from '#/system/Time'
import {
  Color,
  PerspectiveCamera,
  ShaderMaterial,
  WebGLRenderer,
  WebGLRenderTarget
} from 'three'
import { FullScreenQuad, Pass } from 'three/examples/jsm/postprocessing/Pass'

export const StartupShader = {
  uniforms: {
    tDiffuse: { value: null },
    progress: { value: 0 }
  },
  vertexShader: `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,
  fragmentShader: `
uniform sampler2D tDiffuse;
uniform float near;
uniform float far;
uniform float progress;

varying vec2 vUv;

float absmax(vec4 _v) {
  vec4 v = vec4(_v);
  return max(max(v.x, v.y), v.z);
}

void main() {
  vec2 d = vec2(0.001, 0.0);
  vec4 texeln = texture2D( tDiffuse, floor(vUv * 100.0) / 100.0 );
  texeln = floor(texeln * 4.0) / 4.0;
  vec4 texel = texture2D( tDiffuse, vUv );

  vec4 edge = texeln;

  vec4 main = mix(texel, edge, step(vUv.y, 1.0 - progress));
  gl_FragColor = vec4(main.rgb, 1.0);
}
  `
}

export class StartupPass extends Pass {
  private camera: PerspectiveCamera

  private material: ShaderMaterial

  private oldClearColor: Color
  private fsQuad: FullScreenQuad
  private progress = 0
  constructor(camera: PerspectiveCamera) {
    super()
    this.camera = camera

    this.material = new ShaderMaterial({
      defines: {
        DEPTH_PACKING: 1,
        PERSPECTIVE_CAMERA: 1
      },
      uniforms: {
        tDiffuse: { value: null },
        near: { value: camera.near },
        far: { value: camera.far },
        progress: { value: 0 }
      },
      vertexShader: StartupShader.vertexShader,
      fragmentShader: StartupShader.fragmentShader
    })
    this.oldClearColor = new Color()
    this.fsQuad = new FullScreenQuad(this.material)
  }

  render(
    renderer: WebGLRenderer,
    writeBuffer: WebGLRenderTarget,
    readBuffer: WebGLRenderTarget /*, deltaTime, maskActive*/
  ) {
    // Render depth into texture
    renderer.getClearColor(this.oldClearColor)
    const oldClearAlpha = renderer.getClearAlpha()
    const oldAutoClear = renderer.autoClear
    renderer.autoClear = false
    this.material.uniforms.tDiffuse.value = readBuffer.texture

    this.material.uniforms.near.value = this.camera.near
    this.material.uniforms.far.value = this.camera.far
    this.progress = Math.min(
      1.0,
      this.progress + (Math.random() < 0.05 ? Math.random() * 0.1 : 0)
    )
    this.material.uniforms.progress.value = this.progress

    if (this.renderToScreen) {
      renderer.setRenderTarget(null)
      this.fsQuad.render(renderer)
    } else {
      renderer.setRenderTarget(writeBuffer)
      renderer.clear()
      this.fsQuad.render(renderer)
    }

    renderer.setClearColor(this.oldClearColor)
    renderer.setClearAlpha(oldClearAlpha)
    renderer.autoClear = oldAutoClear
  }
}
