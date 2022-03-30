import { Time } from '#/system/Time'
import {
  Color,
  DoubleSide,
  PerspectiveCamera,
  Scene,
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
uniform sampler2D tDepth;
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
  vec4 texeln = texture2D( tDiffuse, vUv - d.yx );
  vec4 texels = texture2D( tDiffuse, vUv + d.yx );
  vec4 texelw = texture2D( tDiffuse, vUv - d.xy );
  vec4 texele = texture2D( tDiffuse, vUv + d.xy );
  vec4 texel = texture2D( tDiffuse, vUv );
  vec4 depth = texture2D( tDepth, vUv );

  float edgeProgress = 1.0 - smoothstep(0.0, 0.6, progress);
  float edgeKey = step(edgeProgress, depth.r);
  vec4 edge = mix(vec4(1.0), vec4(1.0) - absmax(texeln - texels) - absmax(texelw - texele), edgeKey);
  
  float round = 0.3;
  float mainProgress = (1.0 - smoothstep(0.2, 1.0, progress)) * (1.0 + round);
  float mainKey = step(mainProgress, depth.r + depth.g * round);
  vec4 main = mix(edge, texel, mainKey);
  gl_FragColor = vec4(main.rgb, 1.0);
}
  `
}

const cutoutShader = {
  vertexShader: `
varying vec2 vUv;
varying vec4 worldPos;
varying vec3 worldNormal;
void main() {
  vUv = uv;
  worldPos = modelMatrix * vec4(position, 1.0);
  worldNormal = normalize((modelMatrix * vec4(normal, 1.0)).xyz - (modelMatrix * vec4(vec3(0.0), 1.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,
  fragmentShader: `
#define PI 3.14159265
varying vec4 worldPos;
varying vec3 worldNormal;
uniform float progress;
void main() {
  float r = mix(0.0, 1.0, clamp(0.0, 1.0, exp(-(worldPos.y + 1.0) / 11.0)));
  float g = atan(worldNormal.x, worldNormal.z) / PI * 0.5 + 0.5;
  g = floor(g * 6.0) / 6.0;
  gl_FragColor = vec4(r, g, 0.0, 1.0);
}
  `
}

export class StartupPass extends Pass {
  private camera: PerspectiveCamera
  private scene: Scene

  private material: ShaderMaterial
  // for depth
  private depthMaterial: ShaderMaterial
  private depthTexture: WebGLRenderTarget

  private oldClearColor: Color
  private fsQuad: FullScreenQuad
  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    width: number,
    height: number
  ) {
    super()
    this.camera = camera
    this.scene = scene

    this.depthTexture = new WebGLRenderTarget(width, height)
    this.depthMaterial = new ShaderMaterial({
      uniforms: {
        progress: { value: 0 }
      },
      side: DoubleSide,
      vertexShader: cutoutShader.vertexShader,
      fragmentShader: cutoutShader.fragmentShader
    })
    // this.depthMaterial.depthPacking = RGBADepthPacking
    // this.depthMaterial.blending = NoBlending

    this.material = new ShaderMaterial({
      defines: {
        DEPTH_PACKING: 1,
        PERSPECTIVE_CAMERA: 1
      },
      uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: this.depthTexture.texture },
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

  public setSize(width: number, height: number) {
    this.depthTexture.setSize(width, height)
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
    if (Time.time * 0.05) {
      this.depthMaterial.uniforms.progress.value = (Time.time * 0.2) % 1.0
      this.scene.overrideMaterial = this.depthMaterial

      // rendering world data
      renderer.setClearColor(0xffffff)
      renderer.setClearAlpha(1.0)
      renderer.setRenderTarget(this.depthTexture)
      renderer.clear()
      renderer.render(this.scene, this.camera)

      this.scene.overrideMaterial = null

      this.material.uniforms.tDiffuse.value = readBuffer.texture
    }

    this.material.uniforms.near.value = this.camera.near
    this.material.uniforms.far.value = this.camera.far
    this.material.uniforms.progress.value = Math.min(1.0, Time.time * 0.05)

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
