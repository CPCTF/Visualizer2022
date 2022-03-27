import { Time } from '#/system/Time'
import { VisualizerObject } from '#/templates/VisualizerObject'
import { Color, DoubleSide, PlaneBufferGeometry, ShaderMaterial } from 'three'

const vertexShader = `
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vUv = position; 

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vViewPos = viewMatrix * (vWorldPos + vec4(0.0, sin(vWorldPos.x * vWorldPos.z + time) * pow(length(vWorldPos) / 20.0, 2.0), 0.0, 0.0));
  vec4 pos = projectionMatrix * vViewPos;
  vScreenPos = gl_Position = pos;
}
`
const fragmentShader = `
uniform vec3 colorA; 
uniform vec3 colorB; 
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  float dark = max(step(mod(vUv.x * 2.0, 1.0), 0.1), step(mod(vUv.y * 2.0, 1.0), 0.1));
  gl_FragColor = vec4(colorA * dark, 1.0);
}
`

export class Wave extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(100, 100, 200, 200),
      new ShaderMaterial({
        uniforms: {
          colorA: { value: new Color(0xff00ff) },
          time: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        side: DoubleSide
      })
    )
    this.rotation.x = -Math.PI * 0.5
  }

  update() {
    super.update()
    ;(this.material as ShaderMaterial).uniforms.time.value = Time.time
  }
}
