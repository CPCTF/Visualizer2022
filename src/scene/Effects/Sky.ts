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
uniform float radius;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vec4 sky = vec4(mix(colorA, colorB, 1.0 - pow(1.0 - smoothstep(0.0, radius, vWorldPos.y), 16.0)), 1.0);
  vec4 sun = vec4(mix(sunColorA, sunColorB, smoothstep(0.0, radius * 0.1, vWorldPos.y)), 1.0);
  vec4 sunBloom = sun * exp(-distance(vWorldPos.xyz, sunPos) / radius * 5.0);
  sun = sun * step(distance(vWorldPos.xyz, sunPos), radius * 0.3) + sunBloom;
  gl_FragColor = sky + sun;
}
`

export class Sky extends VisualizerObject {
  constructor() {
    const radius = 100
    super(
      new SphereBufferGeometry(radius),
      new ShaderMaterial({
        uniforms: {
          radius: { value: radius },
          colorA: { value: new Color('#db2784') },
          colorB: { value: new Color('#1c1330') },
          sunColorA: { value: new Color('#db2784') },
          sunColorB: { value: new Color('#f2ca2b') },
          sunPos: {
            value: new Vector3(-radius, 0, 0).applyEuler(
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
