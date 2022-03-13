precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float devicePixelRatio;
uniform vec2 lineWidth;
uniform vec2 lineSpacing;
uniform float blend;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord / 2.0 * devicePixelRatio;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord * 2.0 / devicePixelRatio;
}

vec4 getColor(vec2 index, vec2 size) {
  return texture2D(uSampler, unmapCoord(index * size));
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    float delta = mod(floor(coord.x), 2.0);
    int mode = int(mod((floor(delta * 1.5 + coord.y / 2.0)), 3.0));
    vec4 color = texture2D(uSampler, unmapCoord(floor(coord)));

    if (mode == 0) {
      gl_FragColor = mix(vec4(color.r, 0.0, 0.0, 1.0), color, blend);
    } else if (mode == 1) {
      gl_FragColor = mix(vec4(0.0, color.g, 0.0, 1.0), color, blend);
    } else if (mode == 2) {
      gl_FragColor = mix(vec4(0.0, 0.0, color.b, 1.0), color, blend);
    }
}