// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

#define PI 3.14159265

void main (void) {
  float visnetting = mix(1.0, 0.8, smoothstep(0.4, 0.7, distance(vTextureCoord, vec2(0.5))));
  gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(vec3(visnetting), 1.0);
}