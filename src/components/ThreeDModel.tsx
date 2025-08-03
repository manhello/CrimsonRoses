
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ThreeDModelProps {
  type: 'hat' | 'clothing';
  isHovered: boolean;
  index: number;
}

export const ThreeDModel = ({ type, isHovered, index }: ThreeDModelProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.1;
      
      // Scale animation on hover
      const targetScale = isHovered ? 1.5 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime + index * 2) * 0.3;
    }
  });

  const getModelByType = () => {
    switch (type) {
      case 'hat':
        return (
          <>
            <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[1, 1.2, 0.8, 16]} />
              <meshStandardMaterial color="#8B5CF6" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[1.4, 1.4, 0.1, 16]} />
              <meshStandardMaterial color="#A855F7" metalness={0.5} roughness={0.4} />
            </mesh>
          </>
        );
      
      case 'clothing':
        return (
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#10B981" metalness={0.4} roughness={0.6} />
          </mesh>
        );
      
      default:
        return (
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#6B7280" />
          </mesh>
        );
    }
  };

  return (
    <group ref={groupRef}>
      {getModelByType()}
    </group>
  );
};
