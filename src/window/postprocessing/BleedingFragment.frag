precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

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

vec4 getColor(vec2 index, vec2 size) {
  return texture2D(uSampler, unmapCoord(index * size));
}

vec4 bleeding(vec2 coord, vec2 size)
{
  vec2 index = floor(coord / size);
	return 
    getColor(index + vec2(0.5, 0.0), size) * 0.1 + 
    getColor(index + vec2(-0.5, 0.0), size) * 0.1 + 
    getColor(index + vec2(0.0, 0.5), size) * 0.1 + 
    getColor(index + vec2(0.0, -0.5), size) * 0.1 + 
    getColor(index, size) * 0.6;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    gl_FragColor = bleeding(coord, size);
}