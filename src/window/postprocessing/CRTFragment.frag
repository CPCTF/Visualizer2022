// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
uniform vec2 uResolution;
varying vec2 vTextureCoord;

float widthBase = 640.0;

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

void main (void) {
  // float d = distance(vTextureCoord, vec2(0.5)) * 2.0;
  // vec2 dir = normalize(vTextureCoord - vec2(0.5));
  // vec2 uv = vTextureCoord + (d * d - d) * dir;
  vec2 uv = vTextureCoord;
  float heightBase = floor(widthBase / uResolution.x * uResolution.y);
  vec2 base = vec2(widthBase, heightBase);
  vec2 delta = fract(uv * base);
  
  vec4 color =  texture2D(uSampler, floor(uv * base) / base) * vec4(pixel(delta.x), 1.0) * vec4(vec3(mountain(0.0, 1.0, delta.y, 6.0)), 1.0);
  gl_FragColor = color;
}