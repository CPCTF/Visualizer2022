import { Time } from '#/system/Time'
import { VisualizerObject } from '#/templates/VisualizerObject'
import {
  BackSide,
  Color,
  Euler,
  ShaderMaterial,
  SphereBufferGeometry,
  Vector3
} from 'three'

const vertexShader = `
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vUv = position; 

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vViewPos = viewMatrix * vWorldPos;
  vec4 pos = projectionMatrix * vViewPos;
  vScreenPos = gl_Position = pos;
}
`
const fragmentShader = `
uniform vec3 colorA; 
uniform vec3 colorB;
uniform vec3 sunColorA;
uniform vec3 sunColorB;
uniform vec3 sunPos;
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vec4 sky = vec4(mix(colorA, colorB, 1.0 - pow(1.0 - smoothstep(0.0, 1000.0, vWorldPos.y), 16.0)), 1.0);
  vec4 sun = vec4(mix(sunColorA, sunColorB, smoothstep(0.0, 100.0, vWorldPos.y)), 1.0);
  vec4 sunBloom = sun * exp(-distance(vWorldPos.xyz, sunPos) * 0.005);
  sun = sun * step(distance(vWorldPos.xyz + vec3(0.0, sin(time * 0.01) * 100.0, sin(vWorldPos.y * 0.1 + time * 0.4) * pow(max(0.0, sunPos.y - vWorldPos.y) * 0.01, 4.0)), sunPos), 300.0) + sunBloom;
  gl_FragColor = sky + sun;
}
`

export class Sky extends VisualizerObject {
  constructor() {
    super(
      new SphereBufferGeometry(1000),
      new ShaderMaterial({
        uniforms: {
          colorA: { value: new Color('#db2784') },
          colorB: { value: new Color('#1c1330') },
          sunColorA: { value: new Color('#db2784') },
          sunColorB: { value: new Color('#f2ca2b') },
          sunPos: {
            value: new Vector3(-1000, 0, 0).applyEuler(
              new Euler(0.0, 0.0, -Math.PI * 0.06)
            )
          },
          time: { value: 0 }
        },
        side: BackSide,
        vertexShader,
        fragmentShader
      })
    )
  }

  public update() {
    super.update()
    ;(this.material as ShaderMaterial).uniforms.time.value = Time.time
  }
}
