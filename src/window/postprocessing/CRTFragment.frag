// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
uniform vec2 uResolution;
varying vec2 vTextureCoord;

const float widthBase = 640.0;

float saturate(float value) {
  return max(0.0, min(1.0, value));
}
float mountain(float s, float e, float _value, float split) {
  float value = saturate((_value - s) / (e - s));
  return smoothstep(0.0, 1.0, value * split) * smoothstep(1.0, 0.0, max(0.0, value * split - split + 1.0));
}

vec3 pixel(float delta) {
  return vec3(
    mountain(0.0, 0.6, delta, 6.0),
    mountain(0.2, 0.8, delta, 6.0),
    mountain(0.4, 1.0, delta, 6.0)
  );
}

#define PI 3.14159265
const float viewAngle = PI / 5.0;
const float viewAngleCos = 0.5 / tan(viewAngle / 2.0);
vec2 lensDistortion(vec2 vUv) {
  float d = distance(vUv, vec2(0.5));
  vec2 dir = normalize(vUv - vec2(0.5));
  return vec2(0.5) + tan(d * viewAngle) * viewAngleCos * dir;
}

void main (void) {
  // float d = distance(vTextureCoord, vec2(0.5)) * 2.0;
  // vec2 dir = normalize(vTextureCoord - vec2(0.5));
  // vec2 uv = vTextureCoord + (d * d - d) * dir;
  vec2 uv = lensDistortion(vTextureCoord);
  float heightBase = floor(widthBase / uResolution.x * uResolution.y);
  vec2 base = vec2(widthBase, heightBase);
  vec2 delta = fract(uv * base);
  
  vec4 color =  texture2D(uSampler, floor(uv * base) / base) * vec4(pixel(delta.x), 1.0) * vec4(vec3(mountain(0.0, 1.0, delta.y, 6.0)), 1.0);
  if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  else gl_FragColor = color;
}