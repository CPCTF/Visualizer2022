import { BackSide, Color, Mesh, ShaderMaterial } from 'three'

const vertexShader = `
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vUv = position; 

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vViewPos = modelViewMatrix * vec4(position, 1.0);
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
  float dark = mix(0.7, 1.0, step(0.0, sin(vScreenPos.y / vScreenPos.w * 300.0 + time * 20.0)));
  float alpha = mix(0.8, 1.0, step(0.05, mod(vScreenPos.y / vScreenPos.w + time * 10000.0, 1.0)));
  gl_FragColor = vec4(colorA * dark, alpha * 0.7);
}
`
const vertexOutlineShader = `
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vNormal;

void main() {
  vUv = position; 
  vNormal = normal;

  vWorldPos = modelMatrix * vec4(position + normal * 0.03, 1.0);
  vViewPos = viewMatrix * vWorldPos;
  vScreenPos = projectionMatrix * vViewPos;
  gl_Position = vScreenPos;
}
`
const fragmentOutlineShader = `
uniform vec3 colorA; 
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vNormal;

void main() {
  float dark = mix(0.5, 0.7, step(0.0, sin(vScreenPos.y / vScreenPos.w * 300.0 + time * 20.0)));
  float alpha = mix(0.8, 1.0, step(0.05, mod(vScreenPos.y / vScreenPos.w + time * 10000.0, 1.0)));
  gl_FragColor = vec4(colorA * dark, alpha * 0.7);
}
`

const createMaterial = (color: Color) => {
  const material = new ShaderMaterial({
    uniforms: {
      colorA: { value: color },
      time: { value: 0 }
    },
    fragmentShader,
    vertexShader,
    transparent: true
  })
  return material
}

const createOutlineMaterial = (color: Color) => {
  const material = new ShaderMaterial({
    uniforms: {
      colorA: { value: color },
      time: { value: 0 }
    },
    fragmentShader: fragmentOutlineShader,
    vertexShader: vertexOutlineShader,
    transparent: true,
    side: BackSide
  })
  return material
}

export const moldingMesh = (mesh: Mesh, color: Color) => {
  const geom = mesh.geometry
  geom.clearGroups()
  geom.addGroup(0, Infinity, 0)
  geom.addGroup(0, Infinity, 1)
  mesh.material = [createMaterial(color), createOutlineMaterial(color)]
}
