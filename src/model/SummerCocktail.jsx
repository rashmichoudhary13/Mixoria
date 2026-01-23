import { Canvas } from '@react-three/fiber'
import { BoxGeometry } from 'three'


const SummerCocktail = () => {
  return (
    <Canvas camera={{position: [0, 0, 15] , fov: 45}} className='w-full h-full'>
        <ambientLight intensity={0.2} color='#1a1a40'/>
        <directionalLight intensity={1} position={[5,5,5]}/>

        {/* Hello how are you  */}

        <mesh>
           <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color="teal"/>
        </mesh>
    </Canvas>
  )
}

export default SummerCocktail