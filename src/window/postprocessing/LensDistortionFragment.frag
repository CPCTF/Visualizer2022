// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

#define PI 3.14159265
const float viewAngle = PI / 5.0;
const float viewAngleCos = 0.5 / tan(viewAngle / 2.0);
vec2 lensDistortion(vec2 vUv) {
  float d = distance(vUv, vec2(0.5));
  vec2 dir = normalize(vUv - vec2(0.5));
  return vec2(0.5) + tan(d * viewAngle) * viewAngleCos * dir;
}

void main (void) {
  vec2 uv = lensDistortion(vTextureCoord);
  
  if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  else gl_FragColor = texture2D(uSampler, uv);
}