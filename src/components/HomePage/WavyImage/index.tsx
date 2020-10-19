import { fragmentShader } from '@adelerium/components/HomePage/WavyImage/glsl/fragment';
import { vertexShader } from '@adelerium/components/HomePage/WavyImage/glsl/vertex';
import React, { ReactElement, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { ReactThreeFiber, useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import img from './waves.jpg';

const imageWidth = 2449;
const imageHeight = 1633;

export const WavyImage = (): ReactElement => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  const material = useRef<ReactThreeFiber.MaterialNode<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>>();

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

  const Material = (): ReactElement => {
    const texture1 = useLoader(THREE.TextureLoader, img);
    setTexture(texture1);

    return (
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        transparent
        wireframe={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        side={THREE.DoubleSide}
      />
    );
  };

  return (
    <mesh>
      <planeGeometry args={[imageWidth / 1000, imageHeight / 1000, 32, 32]} />
      <Suspense fallback={<></>}>
        <Material />
      </Suspense>
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
