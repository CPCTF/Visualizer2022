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
  vViewPos = viewMatrix * (vWorldPos + vec4(0.0, sin(vWorldPos.x * vWorldPos.z * 0.1 + time) * pow(length(vWorldPos) / 30.0, 2.0), 0.0, 0.0));
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
  float dark = mix(0.1, 1.0, max(pow(mod(vUv.x, 1.0) * 2.0 - 1.0, 16.0), pow(mod(vUv.y, 1.0) * 2.0 - 1.0, 16.0)));
  vec3 bright = pow(max(0.0, length(vWorldPos) / 40.0), 4.0) * colorB;
  gl_FragColor = vec4(colorA * dark + bright, 1.0);
}
`

export class Wave extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(100, 100, 200, 200),
      new ShaderMaterial({
        uniforms: {
          colorA: { value: new Color(0xff44ff) },
          colorB: { value: new Color(0x55aaff) },
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
