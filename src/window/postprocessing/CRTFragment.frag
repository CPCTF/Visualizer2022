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

vec4 getColorAffect(vec2 pixel, vec2 delta, vec2 uv, float _mode) {
  vec4 color = texture2D(uSampler, pixel)
    * mountain(pixel.x - delta.x * 1.0, pixel.x + delta.x * 2.0, uv.x, 2.0)
    * mountain(pixel.y - delta.y * 0.5, pixel.y + delta.y * 1.5, uv.y, 5.0);
  int mode = int(_mode);
  if (mode == 0) {
    return vec4(color.r * 0.9, 0.0, 0.0, 1.0);
  } else if (mode == 1) {
    return vec4(0.0, color.g, 0.0, 1.0);
  }
  return vec4(0.0, 0.0, color.b, 1.0);
}

vec4 pixel(vec2 uv, vec2 base) {
  vec2 delta = 1.0 / base;
  float mode = mod(floor(uv.x * base.x), 3.0);
  vec2 duv = fract(uv * base);

  if (duv.x < 0.5 && duv.y < 0.5) {
    return
      getColorAffect(floor(uv * base + vec2(-1.0, -1.0)) / base, delta, uv, mod(mode - 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(-1.0, 0.0)) / base, delta, uv, mod(mode - 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(0.0, -1.0)) / base, delta, uv, mode) +
      getColorAffect(floor(uv * base + vec2(0.0, 0.0)) / base, delta, uv, mode);
  } else if (duv.x >= 0.5 && duv.y < 0.5) {
    return
      getColorAffect(floor(uv * base + vec2(1.0, -1.0)) / base, delta, uv, mod(mode + 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(1.0, 0.0)) / base, delta, uv, mod(mode + 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(0.0, -1.0)) / base, delta, uv, mode) +
      getColorAffect(floor(uv * base + vec2(0.0, 0.0)) / base, delta, uv, mode);
  } else if (duv.x < 0.5 && duv.y >= 0.5) {
    return
      getColorAffect(floor(uv * base + vec2(-1.0, 1.0)) / base, delta, uv, mod(mode - 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(-1.0, 0.0)) / base, delta, uv, mod(mode - 1.0, 3.0)) +
      getColorAffect(floor(uv * base + vec2(0.0, 1.0)) / base, delta, uv, mode) +
      getColorAffect(floor(uv * base + vec2(0.0, 0.0)) / base, delta, uv, mode);
  }
  return
    getColorAffect(floor(uv * base + vec2(1.0, 1.0)) / base, delta, uv, mod(mode + 1.0, 3.0)) +
    getColorAffect(floor(uv * base + vec2(1.0, 0.0)) / base, delta, uv, mod(mode + 1.0, 3.0)) +
    getColorAffect(floor(uv * base + vec2(0.0, 1.0)) / base, delta, uv, mode) +
    getColorAffect(floor(uv * base + vec2(0.0, 0.0)) / base, delta, uv, mode);
}

void main (void) {
  vec2 uv = vTextureCoord;
  float heightBase = floor(widthBase / uResolution.x * uResolution.y);
  vec2 base = vec2(widthBase, heightBase);

  if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  else gl_FragColor = pixel(uv, vec2(widthBase * 3.0, heightBase));
}
