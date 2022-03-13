// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
uniform vec2 uResolution;
varying vec2 vTextureCoord;
uniform float devicePixelRatio;

const float widthBase = 640.0;

uniform vec4 filterArea;
uniform vec2 dimension;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}


const float pixelSize = 8.0;
vec4 getColor(vec2 coord, float d) {
  vec4 color = texture2D(uSampler, unmapCoord(floor(coord * devicePixelRatio / pixelSize) / devicePixelRatio * pixelSize));
  float light = smoothstep(0.0, 0.8, max(color.r, max(color.g, color.b)));
  return color / light * max(0.0, light - d);
}

void main() {
  vec2 coord = mapCoord(vTextureCoord);
  vec2 index = floor(coord * devicePixelRatio / pixelSize) / devicePixelRatio * pixelSize;
  int mode = int(mod(floor(coord.x * devicePixelRatio / pixelSize), 2.0));
  vec2 delta = fract(coord * devicePixelRatio / pixelSize);
  if (mode == 0) {
    vec2 d = vec2(devicePixelRatio / pixelSize, 0.0);
    vec2 dp = vec2(1.0, 0.0);
    gl_FragColor =
      getColor(index + d.yy, distance(delta, vec2(0.5) - dp.yy)) + 
      getColor(index + d.yx, distance(delta, vec2(0.5) + dp.yx)) + 
      // getColor(index + d.xy, distance(delta, vec2(0.5) + dp.xy)) + 
      getColor(index - d.yx, distance(delta, vec2(0.5) - dp.yx)); 
      // getColor(index - d.xy, distance(delta, vec2(0.5) - dp.xy));
  } else {
    vec2 d = vec2(devicePixelRatio / pixelSize, 0.0);
    vec2 dp = vec2(1.0, 0.0);
    gl_FragColor =
      getColor(index + d.xy, distance(delta, vec2(0.5) + dp.xy)) + 
      getColor(index - d.xy, distance(delta, vec2(0.5) - dp.xy));
  }
}
