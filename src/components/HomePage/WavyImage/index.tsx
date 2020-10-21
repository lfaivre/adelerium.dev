import React, { ReactElement, useEffect, useMemo, useRef } from 'react';
import { ReactThreeFiber, useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { fragmentShader } from './glsl/fragment';
import { vertexShader } from './glsl/vertex';
import img from './waves.jpg';

const imageWidth = 2449;
const imageHeight = 1633;

export const WavyImage = (): ReactElement => {
  const material = useRef<ReactThreeFiber.MaterialNode<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>>();
  const texture = useLoader(THREE.TextureLoader, img);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const uniforms: { [uniform: string]: THREE.IUniform } = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    () => THREE.UniformsUtils.merge([{ uTime: { value: 0 }, uTexture: { value: texture } }]),
    [texture]
  );

  useFrame((state) => {
    if (material && material.current && material.current.uniforms) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
      material.current.uniforms.uTexture.value = texture;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[imageWidth / 1000, imageHeight / 1000, 32, 32]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const Camera = (props: any): ReactElement => {
  const { setDefaultCamera } = useThree();

  const ref = useRef<ReactThreeFiber.Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera> | null>(
    null
  );

  useEffect(() => {
    if (!(ref && ref.current)) return;
    setDefaultCamera((ref.current as unknown) as THREE.PerspectiveCamera);
  }, [setDefaultCamera]);

  useFrame(() => {
    if (!(ref && ref.current && ref.current.updateMatrixWorld)) return;
    ref.current.updateMatrixWorld();
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <perspectiveCamera ref={ref} {...props} />;
};
