import { Canvas, useThree } from '@react-three/fiber'
import { BoxGeometry } from 'three'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'

const SummerCocktail = () => {

  const model = useGLTF("/Models/greenMocktail.glb");
  
  function CameraSetter() {
    const {camera} = useThree();
    
    camera.position.set(0,0,2);

    return null;
  }

  return (
    <Canvas className='w-full h-full' gl={{ outputColorSpace: THREE.SRGBColorSpace }}>
      <CameraSetter/>
      <Center>
      <primitive object={model.scene} position={[0,-1,0]} scale={1.2}/>
      </Center>
      <ambientLight intensity={0.5} color='#ffffff' />
      <directionalLight intensity={1.5} position={[1, -15, 5]} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <directionalLight intensity={1.5} position={[5, 5, -20]} />

      <OrbitControls 
      enableZoom={false} />
    </Canvas>
  )
}

export default SummerCocktail