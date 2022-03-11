// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

#define PI 3.14159265
float scaling(float s, float e, float v) {
  return clamp(0.0, 1.0, (v - s) / (e - s));
}

void main (void) {
  float visnetting = mix(1.0, 0.8, scaling(0.3, 0.5, distance(vTextureCoord, vec2(0.5))));
  gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(vec3(visnetting), 1.0);
}