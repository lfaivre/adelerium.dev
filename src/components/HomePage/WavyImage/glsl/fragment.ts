export const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main() {
    float r = texture2D(uTexture, vUv).r;
    float g = texture2D(uTexture, vUv).g;
    float b = texture2D(uTexture, vUv).b;
    vec3 texture = vec3(r, g, b);
    gl_FragColor = vec4(texture, 1.);
  }
`;
